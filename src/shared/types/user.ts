export {};

declare global {
	export interface IUserBase {
		idLogin: string;
		firstName: string;
		lastName: string;
		patronymic?: string;
	}
}
