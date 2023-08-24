// SWDV 640: User Interface Design
// Concert class and template data rendering for tickets page

class Concert {
    constructor(title, venue, time, date, min, max, tickets=0, image='wireframe_img.png', qrImage='qr_code_img.png') {
        this.title = title;
        this.venue = venue;
        this.time = time;
        this.date = date;
        this.price = { min: min, max: max };
        this.tickets = tickets;
        this.image = 'images/' + image;
        this.qrImage = 'images/' + qrImage;
    }
}

function main() {
    const concerts = [
        new Concert('Pop Singer', 'Stadium', '8:00 PM', 'dd/mm/yyyy', '25.00', '500.00', 2, 'pop.jpg'),
    ];

    const template = $("#concertTemplate").html();
    Mustache.parse(template);

    const rendered = Mustache.render(template, { concerts: concerts });
    $("#concertTarget").html(rendered);
}

$(document).ready(function() {
    main();
});
   