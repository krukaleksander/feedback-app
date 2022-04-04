import { compile } from 'handlebars';
import mjml2html from 'mjml';
export function generateHTML(mail: string) {
  const template = compile(`
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text font-size="20px" color="#F45E43" font-family="helvetica" align="center">ELP Bootcamp</mj-text>

        <mj-divider border-color="#F45E43"></mj-divider>

        <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Rate our bootcamp</mj-text>

        <mj-text align="center" font-size="16px" color="#F45E43">
          <a href="http://localhost:3000/api/vote/?email=${mail}&vote=1" color="#F45E43">1</a>
          <a href="http://localhost:3000/api/vote/?email=${mail}&vote=2" color="#F45E43">2</a>
          <a href="http://localhost:3000/api/vote/?email=${mail}&vote=3" color="#F45E43">3</a>
          <a href="http://localhost:3000/api/vote/?email=${mail}&vote=4" color="#F45E43">4</a>
          <a href="http://localhost:3000/api/vote/?email=${mail}&vote=5" color="#F45E43">5</a>
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`);
  const mjml = template(mail);
  const html = mjml2html(mjml);
  return html.html;
}
