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
                "module1": true,
                "module2": false,
                "module3": true,
                "module4": false,
                "module5": true,
                "module6": true,
                "module7": false,
                "module8": true,
                "module9": false,
                "module10": true,
              }
            }
    }),
    actions: {
        updateAccess(moduleVal, accessVal) {
            this.user.user_role_action_access[moduleVal] = accessVal;
        },
      }
});
