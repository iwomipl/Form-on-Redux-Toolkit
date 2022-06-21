import {FormState} from "../features/form/form-slice";

export interface ReturnedFromAPI {
    message: string;
}
export const fetchFunction = async (formObject: FormState): Promise<ReturnedFromAPI | FormState> => {
    const path = 'https://frosty-wood-6558.getsandbox.com:443/dishes';
    const bodyObj = JSON.stringify(formObject);
    const headersObj = {
            'Content-Type': 'application/json',
        }

    const fetchObj = {
            method: 'POST',
            headers: headersObj,
            body: bodyObj,
        }
    try {
        const result = await fetch(`${path}`, fetchObj);
        if (result.status === 200 || (result.status === 400)) {
            const data = await result.json();

            //data is redundant, but easier to read
            return data;
        } else  {
            return {
                message: `There's a problem, try again.`,
            }
        }
    }catch(err){
        console.error(err);
        return {
            message: "Something else is wrong."
        }
    }
}