import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PDF-Angular';
  width = 0;
  height = 0; /* h */

  onOpen() {
    const documentDefinition = {
      content: [
        { text: 'STATEMENTS', fontSize: 18, bold: true, alignment: 'center', color: 'blue', decoration: 'underline' },
        { text: 'CUSTOMER\'S NAME & ADDRESS', color: '#888' },
        {
          canvas: [
            {
              type: 'rect',
              x: 0.5,
              y: this.height += 2,
              w: 205,
              h: 105,
              r: 4,
              lineColor: 'black',
              color: '#D3D3D3'
            },
            {
              type: 'rect',
              x: 0.5,
              y: this.height,
              w: 200,
              h: 100,
              r: 4,
              lineColor: 'black',
              color: 'white'
            },
            {
              type: 'rect',
              x: 310,
              y: this.height,
              w: 220,
              h: 105,
              r: 4,
              lineColor: 'black',
              color: '#D3D3D3'
            },
            {
              type: 'rect',
              x: 315,
              y: this.height,
              w: 210,
              h: 100,
              r: 4,
              lineColor: 'black',
              color: 'white'
            },
          ]
        },
        {
          text: 'AKIFA MINI MART',
          absolutePosition: { x: 50, y: this.height += 88 },
          fontSize: 8,
          color: '#888'
        }, /* h90 */
        {
          text: 'ZAMBIA',
          absolutePosition: { x: 50, y: this.height += 40 },
          fontSize: 8,
          color: '#888'
        }, /* h130 */
        {
          text: 'TRADE KINGS LIMITED ZAMBIA',
          absolutePosition: { x: 0, y: this.height - 40 },
          fontSize: 8,
          color: '#888',
          alignment: 'right'
        }, /* 90 */
        {
          text: 'PLOT NO 29381, NAMPUNDWE RD..LUSKA, ZAMBIA',
          absolutePosition: { x: 0, y: this.height - 25 },
          fontSize: 8,
          color: '#888',
          alignment: 'right'
        }, /* 105 */
        {
          text: 'L GHT INDUSTRIAL AREA',
          absolutePosition: { x: 0, y: this.height - 10 },
          fontSize: 8,
          color: '#888',
          alignment: 'right'
        }, /* 120 */
        {
          text: 'TEL:',
          absolutePosition: { x: 0, y: this.height += 5 },
          fontSize: 8,
          color: '#888',
          alignment: 'right'
        }, /* h135 */
        {
          text: 'FAX: +264 211-286127',
          absolutePosition: { x: 0, y: this.height += 15 },
          fontSize: 8,
          color: '#888',
          alignment: 'right'
        }, /* h150 */
        {
          text: 'E-MAIL: info.tradekings.co.zm',
          absolutePosition: { x: 0, y: this.height += 15 },
          fontSize: 8,
          color: '#888',
          alignment: 'right'
        }, /* h165 */
        {
          text: 'T N No. 1001736629',
          absolutePosition: { x: 0, y: this.height += 25 },
          fontSize: 8,
          color: '#888',
          alignment: 'right'
        }, /* h190 */
        {
          text: 'Period 01-01-2020 to 07-04-2020',
          absolutePosition: { x: 50, y: this.height += 15 },
          fontSize: 9,
          color: '#888'
        }, /* h205 */
        {
          text: 'PAGE No         1 of 1',
          absolutePosition: { x: 470, y: this.height },
          fontSize: 9,
          color: '#888'
        }, /* h205 */
        {
          absolutePosition: { x: 50, y: this.height += 25 },
          layout: 'lightHorizontalLines', // optional
          table: {
            headerRows: 1,
            widths: [ '*', '*', 100, 50, 50, 100 ],
            body: [
              [
                { text: 'DATE', color: '#ff6262', fontSize: 10 },
                { text: 'REFERENCE', color: '#ff6262', fontSize: 10 },
                { text: 'DESCRIPTION', color: '#ff6262', fontSize: 10, alignment: 'left' },
                { text: 'DEBIT', color: '#ff6262', fontSize: 10,  alignment: 'right' },
                { text: 'CREDIT', color: '#ff6262', fontSize: 10, alignment: 'right' },
                { text: 'BALANCE', color: '#ff6262', fontSize: 10, alignment: 'right' }
              ],
              // tslint:disable-next-line: max-line-length
              [ '', '', { text: 'Brought Forward', color: 'blue', fontSize: 8 }, '', '', { text: '24,023.75 DR', color: 'blue', fontSize: 8, alignment: 'right' } ],
              [
                {
                  text: '08-01-2020',
                  color: '#888',
                  fontSize: 8
                },
                {
                  text: 'LS0000407',
                  color: '#888',
                  fontSize: 8
                },
                {
                  text: 'Sales Invoice',
                  color: '#888',
                  fontSize: 8
                },
                {
                  text: '40,113.75',
                  color: 'black',
                  fontSize: 8,
                  alignment: 'right'
                },
                {
                  text: '',
                },
                {
                  text: '64,137.50 DR',
                  color: 'black',
                  fontSize: 8,
                  alignment: 'right'
                }
              ],
              [
                {
                  text: '14-01-2020',
                  color: '#888',
                  fontSize: 8
                },
                {
                  text: 'BR000366',
                  color: '#888',
                  fontSize: 8
                },
                {
                  text: 'Bank Receipt',
                  color: '#888',
                  fontSize: 8
                },
                {
                  text: ''
                },
                {
                  text: '10,000.00',
                  color: 'black',
                  fontSize: 8,
                  alignment: 'right'
                },
                {
                  text: '54,137.50 DR',
                  color: 'black',
                  fontSize: 8,
                  alignment: 'right'
                }
              ],
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }
}

