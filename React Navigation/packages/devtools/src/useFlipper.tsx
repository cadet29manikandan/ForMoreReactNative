import * as React from 'react';
import { addPlugin, Flipper } from 'react-native-flipper';
import type { NavigationContainerRef } from '@react-navigation/core';
import { nanoid } from 'nanoid/non-secure';
import useDevToolsBase from './useDevToolsBase';

export default function useFlipper(
  ref: React.RefObject<NavigationContainerRef<any>>
) {
  const connectionRef = React.useRef<Flipper.FlipperConnection>();

  const { resetRoot } = useDevToolsBase(ref, (...args) => {
    const connection = connectionRef.current;

    if (!connection) {
      return;
    }

    switch (args[0]) {
      case 'init':
        connection.send('init', {
          id: nanoid(),
          state: args[1],
        });
        break;
      case 'action':
        connection.send('action', {
          id: nanoid(),
          action: args[1],
          state: args[2],
        });
        break;
    }
  });

  React.useEffect(() => {
    addPlugin({
      getId() {
        return 'react-navigation';
      },
      async onConnect(connection) {
        connectionRef.current = connection;

        const on = (event: string, listener: (params: any) => Promise<any>) => {
          connection.receive(event, (params, responder) => {
            try {
              const result = listener(params);

              // Return null instead of undefined, otherwise flipper doesn't respond
              responder.success(result ?? null);
            } catch (e) {
              responder.error(e);
            }
          });
        };

        on('navigation.invoke', ({ method, args = [] }) => {
          switch (method) {
            case 'resetRoot':
              return resetRoot(args[0]);
            default:
              // @ts-expect-error: we want to call arbitrary methods here
              return ref.current?.[method](...args);
          }
        });

        on('linking.invoke', ({ method, args = [] }) => {
          // @ts-expect-error: __linking isn't publicly exposed
          const linking = ref.current?.__linking;

          switch (method) {
            case 'getStateFromPath':
            case 'getPathFromState':
            case 'getActionFromState':
              return linking?.[method](
                args[0],
                args[1]?.trim()
                  ? // eslint-disable-next-line no-eval
                    eval(`(function() { return ${args[1]}; }())`)
                  : linking.config
              );
            default:
              return linking?.[method](...args);
          }
        });
      },
      onDisconnect() {
        connectionRef.current = undefined;
      },
      runInBackground() {
        return false;
      },
    });
  }, [ref, resetRoot]);
}
