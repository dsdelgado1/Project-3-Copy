export function getRoleFromToken(instance, accounts) {
    if (accounts && accounts.length > 0) {
        const account = instance.getAccountByUsername(accounts[0].username);
        if (account) {
            const idTokenClaims = account.idTokenClaims;
            const roles = idTokenClaims['roles'];
            if (roles && roles.length > 0) {
                return roles[0];  // assumes each user has exactly one role
            }
        }
    }
    return null;
}
// This is just a sample, the actual code might differ based on how workerId is stored
export function getWorkerIdFromToken(instance, accounts) {
    if (accounts && accounts.length > 0) {
        const account = instance.getAccountByUsername(accounts[0].username);
        if (account) {
            const idTokenClaims = account.idTokenClaims;
            const workerId = idTokenClaims['workerId']; // Replace 'workerId' with the actual key
            if (workerId) {
                return workerId;
            }
        }
    }
    return null;
}
