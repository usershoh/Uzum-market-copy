// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root/index.jsx";
import ProviderConfig from "./tools/provider/index.jsx";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// Импорт переводов из папки src/locales
import uz from "./locales/uz.json";
import ru from "./locales/ru.json";

i18next
  .init({
    interpolation: { escapeValue: false },
    lng: "uz", // Язык по умолчанию
    resources: {
      uz: {
        global: uz,
      },
      ru: {
        global: ru,
      },
    },
  })
  .then(() => {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <ProviderConfig>
          <I18nextProvider i18n={i18next}>
            <Root />
          </I18nextProvider>
        </ProviderConfig>
      </React.StrictMode>
    );
  });
