/* eslint-disable no-tabs */
export interface IToken {
	token: string | null;
	userId: number | null;
}
export interface ITokenDecode {
	exp: number;
	userId: string;
}
