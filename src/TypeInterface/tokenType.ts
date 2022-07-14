/* eslint-disable no-tabs */
export interface IToken {
	token: string | null;
	userId: number | null;
}
export interface ITokenDecode {
	EXPIRED_DATE: number;
	USER_ID: number;
}
