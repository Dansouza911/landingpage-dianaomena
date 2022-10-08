import { FormspreeProvider } from '@formspree/react';
function App({ Component, pageProps }) {
  return (
  	<FormspreeProvider project="{id-do-projeto}">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
export default App;
