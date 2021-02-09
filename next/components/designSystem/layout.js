import classnames from 'classnames'
import { maxWidthSections } from './theme'

function Container({ className = '', children }) {
  return <div className={classnames(`${className}`)}>{children}</div>
}

function Section({ className = '', children }) {
  return <section className={classnames(maxWidthSections, `p-4`, className)}>{children}</section>
}

function Article({ children }) {
  return (
    <Section>
      <article className="bg-gray-100 p-8 mb-8">{children}</article>
    </Section>
  )
}

export { Container, Section, Article }
