import { compile } from "handlebars";
import mjml2html from "mjml";
export function generateHTML(mail: string) {
  const template = compile(`
<mjml>
    <mj-body>
        <mj-section>
            <mj-column>
                <mj-text font-size="20px" color="#F45E43" font-family="helvetica" align="center">ELP Bootcamp</mj-text>

                <mj-divider border-color="#F45E43"></mj-divider>

                <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Rate our bootcamp</mj-text>

                <mj-text>
                    <form action="http://localhost:3000/api/vote?email=${mail}" method="GET">
                        <mj-text align="center" font-size="16px" color="#F45E43">Rate workshop</mj-text>

                        <div>
                            <input type="radio" value="1" id="rateWorkshop-1" name="rateWorkshop"/>
                            <label for="rateWorkshop-1">1</label>
                        </div>
                        <div>
                            <input type="radio" value="2" id="rateWorkshop-2" name="rateWorkshop"/>
                            <label for="rateWorkshop-2">2</label>
                        </div>
                        <div>
                            <input type="radio" value="3" id="rateWorkshop-3" name="rateWorkshop"/>
                            <label for="rateWorkshop-3">3</label>
                        </div>
                        <div>
                            <input type="radio" value="4" id="rateWorkshop-4" name="rateWorkshop"/>
                            <label for="rateWorkshop-4">4</label>
                        </div>
                        <div>
                            <input type="radio" value="5" id="rateWorkshop-5" name="rateWorkshop"/>
                            <label for="rateWorkshop-5">5</label>
                        </div>

                        <br>
                        <br>

                        <mj-text align="center" font-size="16px" color="#F45E43">Rate Michał</mj-text>


                        <div>
                            <input type="radio" value="1" id="rateMichal-1" name="rateMichal"/>
                            <label for="rateMichal-1">1</label>
                        </div>
                        <div>
                            <input type="radio" value="2" id="rateMichal-2" name="rateMichal"/>
                            <label for="rateMichal-2">2</label>
                        </div>
                        <div>
                            <input type="radio" value="3" id="rateMichal-3" name="rateMichal"/>
                            <label for="rateMichal-3">3</label>
                        </div>
                        <div>
                            <input type="radio" value="4" id="rateMichal-4" name="rateMichal"/>
                            <label for="rateMichal-4">4</label>
                        </div>
                        <div>
                            <input type="radio" value="5" id="rateMichal-5" name="rateMichal"/>
                            <label for="rateMichal-5">5</label>
                        </div>

                        <br>
                        <br>

                        <input type="submit" value="Submit">
                    </form>
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
