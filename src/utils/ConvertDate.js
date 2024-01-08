import moment from 'moment';

export const ConvertDate = (string) => {
    const formattedDate = moment(string).format('DD/MM/YYYY');
    return formattedDate;
}