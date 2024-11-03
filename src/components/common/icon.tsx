import DOMPurify from "isomorphic-dompurify";

interface Props extends React.SVGAttributes<SVGSVGElement> {
  icon: string;
}

const addAttributesToInnerHTMLString = (
  innerHTML: string,
  attributes: React.SVGAttributes<SVGSVGElement> = {},
) => {
  const { style, ...otherAttributes } = attributes;
  const styleString = style
    ? `style="${Object.entries(style)
        .map(([key, value]) => {
          const cssKey = key.replace(
            /[A-Z]/g,
            (char) => `-${char.toLowerCase()}`,
          );
          return `${cssKey}:${value}`;
        })
        .join("; ")}"`
    : "";

  const attributesString = Object.entries(otherAttributes)
    .map(([key, value]) => `${key}="${value}"`)
    .concat(styleString ? [styleString] : [])
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
