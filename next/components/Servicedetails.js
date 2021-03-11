import BlockContent from '@sanity/block-content-to-react';
import { PortableText } from '../lib/sanity';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    span: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const CodeRenderer = (props) => {
  console.log('Render code block: ', props);
  return BlockContent.defaultSerializers.types.block(props);
};

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '');
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    );
  }

  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

export default function Categoryservice({ services, category }) {
  return (
    <div className="mb-4 space-y-2">
      <h3>{category}</h3>
      {services.map((d, i) => (
        <div key={i} className="border-orange-700 border-b-2">
          {d?.description ? (
            <details>
              <summary>plus d'infos</summary>
              <PortableText blocks={d.description} />
            </details>
          ) : null}
          <div className="grid items-start grid-cols-1 md:grid-cols-2">
            <div className="">
              <h4 className="text-orange-700">{d.name}</h4>
            </div>
            <ul className="divide-y-2 divide-dotted divide-orange-700">
              <li key={i}>
                {d.defaultProductVariant.title} {d.defaultProductVariant.price}€
              </li>
              {d?.variants?.map((v, index) => (
                <li key={`var${index}`}>
                  {v.title} {v.price}€
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
