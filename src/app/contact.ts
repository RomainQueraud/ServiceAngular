export class Contact {
  username: string = '';
  company: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
