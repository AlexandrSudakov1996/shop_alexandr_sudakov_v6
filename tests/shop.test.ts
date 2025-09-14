import {isCategoryExists} from "../src/firebase/firebaseDBService";
import {deleteApp} from "firebase/app"
import {app} from "../src/configurations/firebase-config";

describe('Shop tests ', () => {

    afterAll(async () => {
        await deleteApp(app)
    })

    test('Test: firebaseDbService.isCategoryExists', () => {
        expect(isCategoryExists('bread')).resolves.toBeTruthy();
        expect(isCategoryExists('milk')).resolves.toBeFalsy();
    })
})