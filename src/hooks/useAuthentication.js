import getDataFromLocalStorage from "../app/util/localStorage/getDataFromLocalStorage";
import saveDataToLocalStorage from "../app/util/localStorage/saveDataTolocalStorage";
import info from "../api/todoist/info";
import Todoist from "../api/todoist/Todoist";
import {
  redirect,
  unstable_HistoryRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { toast } from "sonner";

const KEY = "todoist_token";
const saveUserToken = async (code) => {
  const { isSuccess, message, access_token } = await Todoist.getToken(code);
  if (isSuccess) {
    saveDataToLocalStorage(KEY, access_token);
    toast.success(message);
    window.location.href = window.location.pathname;
  }
  toast.error(message);
  return false;
};

const useAuthentication = () => {
  const isTokenExist = getDataFromLocalStorage(KEY, null);
  if (isTokenExist !== null) {
    return true;
  }

  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  const state = params.get("state");

  if (code === null || state === null) {
    return false;
  }
  if (state !== info.state) {
    return false;
  }
  saveUserToken(code);
};

export default useAuthentication;
