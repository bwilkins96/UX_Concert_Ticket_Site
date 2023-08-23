// SWDV 640: User Interface Design
// Concert class and template data rendering

class Concert {
    constructor(title, venue, time, date, min, max, image='wireframe_img.png') {
        this.title = title;
        this.venue = venue;
        this.time = time;
        this.date = date;
        this.price = { min: min, max: max };
        this.image = 'images/' + image;
    }
}

function main() {
    const concerts = [
        new Concert("Rock N' Roll Tour", 'Outdoor Pavilion', '8:30 PM', 'dd/mm/yyyy', '20.00', '300.00', 'rock.jpg'),
        new Concert('Pop Singer', 'Stadium', '8:00 PM', 'dd/mm/yyyy', '25.00', '500.00', 'pop.jpg'),
        new Concert('Country Band', 'State Fair', '6:30 PM', 'dd/mm/yyyy', '20.00', '100.00', 'country.jpg'),
        new Concert('Symphony', 'Local Theatre', '7:00 PM', 'dd/mm/yyyy', '10.00', '50.00', 'classical.jpg')
    ];

    const template = $("#concertTemplate").html();
    Mustache.parse(template);

    const rendered = Mustache.render(template, { concerts: concerts });
    $("#concertTarget").html(rendered);
}

$(document).ready(function() {
    main();
});
   