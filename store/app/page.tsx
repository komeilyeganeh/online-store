import { useTranslations } from "next-intl";

export default function Home() {
  // ---- nextIntl ----
  const t = useTranslations();
  // ---- jsx return ----
  return (
    <h1>{t("hello")}</h1>
  );
}
