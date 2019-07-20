import axios from "axios";
import { loginUrl } from './config';

const instans = axios.create({
  baseURL: loginUrl,
  timeout: 5000,
})

export default instans