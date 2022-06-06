export function numberFormat(number) {
    return Intl.NumberFormat("nl-NL", {
        style: "currency",
        currency: "EUR",
    }).format(number);
}
