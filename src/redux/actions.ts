export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
    payload: {  amountOfBYN: string,
                amountOfCurrency: string,
    },
};

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload: { amountOfBYN, amountOfCurrency },
    }
};

export type ChangeActionType = {
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
    // зануляем импуты что бы не было ошибок ковертации при смене валюты
    payload: { isBuying: boolean, amountOfBYN: '', amountOfCurrency: '',},
};


export const ChangeActionAC = (isBuying: boolean): ChangeActionType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        payload: { isBuying,  amountOfBYN: '', amountOfCurrency: '', },
    };
};

export type ChangeCurrentCurrencyType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
    payload: { currentCurrency: string, amountOfBYN: '', amountOfCurrency: '' },
};

export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        payload: { currentCurrency,  amountOfBYN: '', amountOfCurrency: '', }
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeActionType | ChangeCurrentCurrencyType;