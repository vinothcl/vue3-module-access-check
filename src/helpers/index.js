import { useAuthStore } from '@/stores';

const haveAccess = (el, binding, vnode) => {
	const authStore = useAuthStore();
	if(authStore.user.user_is_super_admin){
		return vnode.el.hidden = false;
	}
	var permissions = [];
	if(!authStore.user.user_is_super_admin) {
        for (let [actionval, accessVal] of Object.entries(authStore.user.user_role_action_access)) {
			if(accessVal == 1) {
				permissions.push(actionval);
			}
        }
    }
    if(permissions.includes(binding.value)) {
    	return vnode.el.hidden = false;
    } else {
    	return vnode.el.hidden = true;
    }
}
const noAccess = (el, binding, vnode) => {
	const authStore = useAuthStore();
	var nopermissions = [];
	if(!authStore.user.user_is_super_admin) {
        for (let [actionval, accessVal] of Object.entries(authStore.user.user_role_action_access)) {
			if(accessVal == 0) {
				nopermissions.push(actionval);
			}
        }
    }
    if(nopermissions.includes(binding.value)) {
    	return vnode.el.hidden = false;
    } else {
    	return vnode.el.hidden = true;
    }
}


export { haveAccess, noAccess };