import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: {
              "name": "test",
              "user_id": 1,
              "user_is_super_admin": 0, // change to 1 for super admin
              "user_role": "Manager",
              "user_role_action_access": {
                "module1": 1,
                "module2": 0,
                "module3": 1,
                "module4": 0,
                "module5": 1,
                "module6": 1,
                "module7": 0,
                "module8": 1,
                "module9": 0,
                "module10": 1,
              }
            }
    }),
});
