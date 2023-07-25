import ColoredSentence from "./ColoredSentence";
import {  useTranslation  } from 'react-i18next';

const LocalizedText = ({textKey, colored}) => {
  const { t } = useTranslation();

  return (
    <>
        {colored ? <ColoredSentence text={t(textKey)} /> : <span>{t(textKey)}</span>}
    </>
  )
};

export default LocalizedText;

LocalizedText.defaultProps = {
    colored: false
}