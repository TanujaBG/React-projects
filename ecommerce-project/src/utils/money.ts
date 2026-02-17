export function formatMoney(cents: number)
{
    if (cents < 0)
    {
        cents = cents * -1;
        return `-$${(cents / 100).toFixed(2)}`
    }
    return `$${(cents / 100).toFixed(2)}`;
}