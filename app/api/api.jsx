// api.js
import axios from 'axios';

const API_BASE_URL = 'https://hp-api.onrender.com/api';

export const fetchAllCharacters = () => axios.get(`${API_BASE_URL}/characters`);
export const fetchCharacterById = (id) => axios.get(`${API_BASE_URL}/character/${id}`);
export const fetchHogwartsStudents = () => axios.get(`${API_BASE_URL}/characters/students`);
export const fetchHogwartsStaff = () => axios.get(`${API_BASE_URL}/characters/staff`);
export const fetchCharactersByHouse = (house) => axios.get(`${API_BASE_URL}/characters/house/${house}`);
export const fetchAllSpells = () => axios.get(`${API_BASE_URL}/spells`);
