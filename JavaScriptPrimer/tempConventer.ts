export class TempConventer {
    static convertFtoC(temp: number | string): string
    {
        let value: number = (temp as number).toPrecision ? temp as number : parseFloat(<string>temp);

        return ((parseFloat(value.toPrecision(2)) - 32) / 1.8).toFixed(1);
    }
}