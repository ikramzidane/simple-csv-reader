export default class Reader {
  constructor(root) {
    this.root = root;
    this.header = [];
    this.body = [];
  }

  reset() {
    this.header = [];
    this.body = [];
  }

  generateHeader() {
    return `
      <thead>
        <tr>
          ${this.header.map(item => `<td>${item}</td>`).join('')}
        </tr>
      </thead>
    `
  }

  generateBody() {
    let html = this.body.map(record => {
      return `
        <tr>${record.map(value => `<td>${value}</td>`).join('')}</tr>
      `;
    }).join('');

    return `
      <tbody>
        ${html}
      </tbody>
    `
  }


  update(records) {
    this.reset();

    this.header = records[0];
    this.body = records.slice(1);

    let header = this.generateHeader(); 
    let body = this.generateBody(); 

    this.root.innerHTML = `
      <table>
        ${header}
        ${body}
      </table>
    `;
  }
}