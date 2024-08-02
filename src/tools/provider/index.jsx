import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const ProviderConfig = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            {children}
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default ProviderConfig;
