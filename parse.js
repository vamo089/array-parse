let generations = [
    {generation: 1, model_number: "i3-530"},
    {generation: 1, model_number: "i3-540"},
    {generation: 1, model_number: "i3-550"},
    {generation: 1, model_number: "i3-560"},

    {generation: 2, model_number: "i3-2100"},
    {generation: 2, model_number: "i3-2102"},
    {generation: 2, model_number: "i3-2105"},
    {generation: 2, model_number: "i3-2120"},
    {generation: 2, model_number: "i3-2125"},
    {generation: 2, model_number: "i3-2130"},
    {generation: 2, model_number: "i3-2100T"},
    {generation: 2, model_number: "i3-2120T"},

    {generation: 3, model_number: "i3-3210"},
    {generation: 3, model_number: "i3-3220"},
    {generation: 3, model_number: "i3-3225"},
    {generation: 3, model_number: "i3-3240"},
    {generation: 3, model_number: "i3-3245"},
    {generation: 3, model_number: "i3-3250"},
    {generation: 3, model_number: "i3-3220T"},
    {generation: 3, model_number: "i3-3240T"},
    {generation: 3, model_number: "i3-3250T"},
];

let model_number = [];
generations.forEach(function (items, i) {
    model_number.push(items.model_number);
    let generation_tocompaire = i !== generations.length - 1 ? generations[i + 1].generation : generations[generations.length - 1].generation;
    if (generations[i].generation !== generation_tocompaire || i === generations.length - 1) {
//            model_number, you can use this item as you wish
        model_number = [];
    }
});