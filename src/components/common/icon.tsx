import DOMPurify from "isomorphic-dompurify";

interface Props extends React.SVGAttributes<SVGSVGElement> {
  icon: string;
}

const addAttributesToInnerHTMLString = (
  innerHTML: string,
  attributes: React.SVGAttributes<SVGSVGElement> = {},
) => {
  const attributesString = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  const newInnerHTML = innerHTML
    .replace(/^<svg/, `<svg ${attributesString}`)
    .replace("className", "class");

  return newInnerHTML;
};

export const Icon: React.FC<Props> = ({ icon, ...attributes }) => {
  const sanitizedIcon = DOMPurify.sanitize(
    addAttributesToInnerHTMLString(icon, attributes),
  );

  return <span dangerouslySetInnerHTML={{ __html: sanitizedIcon }} />;
};
