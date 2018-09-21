export class User {
	constructor(
		public id? : string, 
		public sessionToken?: object,
		public name?: string,
		public userName?: string,
		public password?: string  ) {}
}
