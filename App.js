/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {WebView} from 'react-native-webview';

export const App: () => React$Node = () => {
  const webviewRef = React.useRef();

  React.useEffect(() => {
    setTimeout(() => {
      if (webviewRef.current !== null) {
        webviewRef.current.injectJavaScript(
          "document.body.innerHTML = 'window properties: <br/>' + JSON.stringify(Object.keys(window)) + '<hr/> ReactNativeWebView properties: <br/>' + JSON.stringify(Object.keys(window.ReactNativeWebView))",
        );
      }
    }, 5000);
  }, []);

  return <WebView source={{uri: 'https://github.com/react-native-community/react-native-webview'}} ref={webviewRef} onMessage={console.log} />;
};
