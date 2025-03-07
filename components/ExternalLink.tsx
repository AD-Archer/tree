import { TouchableOpacity } from 'react-native';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform, GestureResponderEvent } from 'react-native';

type Props = Omit<ComponentProps<typeof TouchableOpacity>, 'onPress'> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  // Validate the href to ensure it's a valid URL
  const isValidUrl = (url: string) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z0-9](?!-)[a-z0-9-]{0,61}[a-z0-9])\\.)+[a-z]{2,6}|localhost|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP address
      '(\\:\\d+)?(\\/[-a-z0-9%_.~+]*)*$', 'i'); // port and path
    return !!pattern.test(url);
  };

  return (
    <TouchableOpacity
      {...rest}
      onPress={async (event: GestureResponderEvent) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          if (isValidUrl(href)) {
            // Open the link in an in-app browser if the URL is valid.
            await openBrowserAsync(href);
          } else {
            console.error('Invalid URL:', href);
          }
        }
      }}
    >
      {/* You can add children here to display the link text or icon */}
    </TouchableOpacity>
  );
}
