const LocalStorageMethods = {
    store(key, value) {
        try {
            if (typeof(Storage) !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return error;
        }
    },
    retrieve(key, defaultReturn = {}) {
        try {
            if (typeof(Storage) !== 'undefined') {
                if (localStorage.getItem(key)) {
                    return JSON.parse(localStorage.getItem(key))
                } else {
                    return defaultReturn
                }
            } else {
                return false
            }
        } catch (error) {
            return error
        }
    },
    remove(key) {
        try {
            if (typeof(Storage) !== 'undefined') {
                if (localStorage.getItem(key)) {
                    localStorage.removeItem(key);
                    return true;
                } else {
                    return null;
                }
            } else {
                return false;
            }
        } catch (error) {
            return error;
        }
    },
    removeAll() {
        try {
            if (typeof(Storage) !== 'undefined') {
                localStorage.clear();
            } else {
                return false;
            }
        } catch (error) {
            return error;
        }
    }
}