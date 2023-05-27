import { atom } from "recoil";

import { AuthUserDTO, UserDTO } from "../../common/models/login.model"

export const AtomAuthUser = atom<AuthUserDTO>({
  key: "atomAuthUser",
  default: {} as AuthUserDTO,
});


export const AtomUser = atom<UserDTO>({
  key: "atomUser",
  default: {} as UserDTO,
});