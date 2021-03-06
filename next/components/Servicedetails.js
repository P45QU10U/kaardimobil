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
    <div className="mb-4 p-4 bg-orange-300">
      <h2>{category}</h2>
      {services.map((d, i) => (
        <div key={i}>
          <h3>{d.name}</h3>

          {d?.description && <PortableText blocks={d.description} />}
          <ul>
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
      ))}
    </div>
  );
}
