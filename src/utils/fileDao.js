'use strict'
import { message } from 'antd'
import request from './request';
import qs from 'qs';

const HOST = "http://localhost:3000";

export function checkSupport (){
	if(!FileReader){
		 message.error('Not support FileReader!');
	}
}

export async function getAllUsers(){
	return await request(`${HOST}/users`);
}

export async function getUser(param){
	return await request(`${HOST}/users?${qs.stringify(param)}`);
}

export async function createUser(user){
	return await request(`${HOST}/users?${qs.stringify(user)}`,{
		method:'post'
	});
}