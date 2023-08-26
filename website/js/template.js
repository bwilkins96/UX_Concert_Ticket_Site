// SWDV 640: User Interface Design
// Concert class and template data rendering

class Concert {
    constructor(title, venue, time, date, min, max, tickets=0, image='wireframe_img.png', qrImage='qr_code_img.png', details=[]) {
        this.title = title;
        this.venue = venue;
        this.time = time;
        this.date = date;
        this.price = { min: min, max: max, details: details };
        this.tickets = tickets;
        this.image = 'images/' + image;
        this.qrImage = 'images/' + qrImage;
    }
}

function indexCarouselFix() {
    const carouselItem = document.querySelector('.carousel-item');
    carouselItem.classList.add('active');
}

function main() {
    let concerts = [];
    
    if ($('#ticketPage').length) {
        const priceDetails = [
            {price: '25.00', type: 'Back Rows'},
            {price: '100.00', type: 'Middle Rows'},
            {price: '500.00', type: 'Front Rows (VIP)'},
        ];

        concerts = [
            new Concert('Pop Singer', 'Stadium', '8:00 PM', 'dd/mm/yyyy', '25.00', '500.00', 2, 'pop.jpg', 'qr_code_img.png', priceDetails),
        ];
    } else {
        concerts = [
            new Concert("Rock N' Roll Tour", 'Outdoor Pavilion', '8:30 PM', 'dd/mm/yyyy', '20.00', '300.00', 0, 'rock.jpg'),
            new Concert('Pop Singer', 'Stadium', '8:00 PM', 'dd/mm/yyyy', '25.00', '500.00', 0, 'pop.jpg'),
            new Concert('Country Band', 'State Fair', '6:30 PM', 'dd/mm/yyyy', '20.00', '100.00', 0, 'country.jpg'),
            new Concert('Symphony', 'Local Theatre', '7:00 PM', 'dd/mm/yyyy', '10.00', '50.00', 0, 'classical.jpg')
        ];
    }
    

    const template = $("#concertTemplate").html();
    Mustache.parse(template);

    const rendered = Mustache.render(template, { concerts: concerts });
    $("#concertTarget").html(rendered);

    if ($('#indexMarker').length) indexCarouselFix();
}

$(document).ready(function() {
    main();
});
   