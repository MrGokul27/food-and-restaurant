(function () {
  "use strict";

  // =========================================================================
  // ROLE-BASED DASHBOARD DATA (5 ROLES × 5 SIDEBAR SECTIONS = 25 ORIGINAL VIEWS)
  // =========================================================================
  const IMG = {
    heroBurger: "../assets/images/home/home-hero-img-wrap.webp",
    about1: "../assets/images/home/home-about-img-1.webp",
    about2: "../assets/images/home/home-about-img-2.webp",
    chef: "../assets/images/home/home-chef-history-img.webp",
    fav1: "../assets/images/home/home-guest-favourites-1.webp",
    fav2: "../assets/images/home/home-guest-favourites-2.webp",
    fav3: "../assets/images/home/home-guest-favourites-3.webp",
    fav4: "../assets/images/home/home-guest-favourites-4.webp",
    cat1: "../assets/images/home/home-categories-img-1.webp",
    cat2: "../assets/images/home/home-categories-img-2.webp",
    cat3: "../assets/images/home/home-categories-img-3.webp",
    cat4: "../assets/images/home/home-categories-img-4.webp",
    cat5: "../assets/images/home/home-categories-img-5.webp",
    cat6: "../assets/images/home/home-categories-img-6.webp",
  };

  const ROLE_CONFIG = {
    customer: {
      roleKey: "customer",
      roleLabel: "Customer / Guest Diner",
      badgeIcon: "bi-cup-hot-fill",
      portalTitle: "Covent Garden Member Dining Portal",
      portalSubtitle:
        "Manage your wood-fired table locks, track live kitchen orders & redeem Flame Rewards.",
      kitchenNote: "Brick Oven #1 Firing at 465°C · Express 18-Min Delivery",
      sections: [
        {
          id: "cust-overview",
          navTitle: "Diner Overview",
          icon: "bi-grid-1x2-fill",
          badge: "Live",
          eyebrow: "Welcome To Your Table",
          heading: "Guest Diner Overview & Live Kitchen Pass",
          description:
            "Real-time status of your Covent Garden orders, table reservations, and personalised tasting recommendations.",
          primaryBtn: "Order Wood-Fired Takeaway",
          kpis: [
            {
              value: "2,840 pts",
              label: "Flame Rewards Balance",
              sub: "Gold Truffle Circle · £28.40 Credit",
              trend: "+340 pts this month",
              trendType: "up",
              icon: "bi-fire",
              color: "chili",
            },
            {
              value: "2 Active",
              label: "Confirmed Table Locks",
              sub: "Next: Fri 20:00 · Chef's Counter",
              trend: "Booth #04 Locked",
              trendType: "gold",
              icon: "bi-calendar2-check-fill",
              color: "mustard",
            },
            {
              value: "28 Orders",
              label: "Lifetime Culinary Orders",
              sub: "Favourite: Truffle Wagyu Smash",
              trend: "Top 5% London Diner",
              trendType: "up",
              icon: "bi-bag-heart-fill",
              color: "basil",
            },
            {
              value: "17 Mins",
              label: "Avg Express Delivery",
              sub: "Covent Garden & Soho Zone",
              trend: "Hot Thermal Bag",
              trendType: "hot",
              icon: "bi-lightning-charge-fill",
              color: "ink",
            },
          ],
          tableTitle: "Recent Kitchen Orders & Dining Ledger",
          tableSub:
            "All dine-in booth checks and express thermal-bag deliveries linked to your login email.",
          tableHeaders: [
            "Order Ref",
            "Signature Plates Ordered",
            "Dining Mode",
            "Date & Time",
            "Total Paid",
            "Kitchen Status",
            "Receipt",
          ],
          tableRows: [
            [
              "#STK-8942",
              "Double Truffle Wagyu Smash, 48-Hr Diavola Pizza, Rosemary Fries",
              "Express Delivery (WC2E)",
              "Today · 12:05 PM",
              "£42.50",
              { text: "Wood-Oven Pass", type: "mustard" },
              "Track Order",
            ],
            [
              "#STK-8819",
              "Burrata & San Marzano Sourdough, Pistachio Gelato Shake",
              "Dine-In · Booth #04",
              "18 Oct 2026 · 20:15",
              "£36.00",
              { text: "Completed", type: "basil" },
              "View Invoice",
            ],
            [
              "#STK-8690",
              "Smoked Brisket Brioche Burger, Charred Padrón Peppers",
              "Express Delivery (W1D)",
              "12 Oct 2026 · 19:30",
              "£29.80",
              { text: "Completed", type: "basil" },
              "View Invoice",
            ],
            [
              "#STK-8544",
              "Chef's 5-Course Wood-Fired Tasting Menu for Two",
              "Chef's Counter #02",
              "04 Oct 2026 · 21:00",
              "£118.00",
              { text: "Completed", type: "basil" },
              "View Invoice",
            ],
            [
              "#STK-8410",
              "Buttermilk Fried Chicken Burger, Truffle Parmesan Wedges",
              "Click & Collect Pass",
              "27 Sep 2026 · 13:20",
              "£24.50",
              { text: "Completed", type: "basil" },
              "View Invoice",
            ],
          ],
          cardsTitle: "Chef's Personalised Picks For Your Palate",
          cardsEyebrow: "Curated From Your Order History",
          cards: [
            {
              img: IMG.heroBurger,
              tag: "98% Taste Match",
              title: "Black Truffle Aged Wagyu Smash",
              desc: "45-day dry-aged Hereford beef, melted Tunworth brie, black truffle glaze, and toasted potato brioche.",
              meta: [
                ["Prep Time", "9 Mins on Cast-Iron"],
                ["Flame Points", "+190 pts"],
              ],
              highlight: "£18.90",
              btnText: "Quick Reorder",
            },
            {
              img: IMG.fav2,
              tag: "48-Hr Sourdough",
              title: "Nduja & Fior di Latte Wood Pizza",
              desc: "Blistered in our 465°C brick oven with Calabrian spicy sausage, wildflower honey, and fresh basil.",
              meta: [
                ["Prep Time", "90 Secs in Wood Oven"],
                ["Flame Points", "+175 pts"],
              ],
              highlight: "£17.50",
              btnText: "Quick Reorder",
            },
            {
              img: IMG.fav3,
              tag: "Member Exclusive",
              title: "Bronte Pistachio Gelato Shake",
              desc: "Hand-churned Sicilian pistachio gelato spun with organic Jersey milk and crushed amaretti crumb.",
              meta: [
                ["Prep Time", "4 Mins at Cold Bar"],
                ["Flame Points", "+95 pts"],
              ],
              highlight: "£9.50",
              btnText: "Quick Reorder",
            },
          ],
        },
        {
          id: "cust-bookings",
          navTitle: "My Table Bookings",
          icon: "bi-calendar2-week-fill",
          badge: "2",
          eyebrow: "24 Covent Garden Piazza",
          heading: "Your Reserved Booths & Chef's Counter Seats",
          description:
            "Manage your priority seating locks, pre-order wood-roasted focaccia starters, and update guest dietary notes.",
          primaryBtn: "Reserve New Table",
          kpis: [
            {
              value: "Fri, 24 Oct",
              label: "Next Confirmed Seating",
              sub: "20:00 PM · 4 Guests · Booth #04",
              trend: "Deposit Protected",
              trendType: "up",
              icon: "bi-calendar-event-fill",
              color: "chili",
            },
            {
              value: "Chef's Pass",
              label: "Preferred Dining Zone",
              sub: "Direct view of the wood-fired oven",
              trend: "VIP Priority",
              trendType: "gold",
              icon: "bi-award-fill",
              color: "mustard",
            },
            {
              value: "100% On-Time",
              label: "Attendance Record",
              sub: "14 Reservations · 0 No-Shows",
              trend: "Unlocked Free Starter",
              trendType: "up",
              icon: "bi-shield-check",
              color: "basil",
            },
          ],
          tableTitle: "Covent Garden Table Reservation Schedule",
          tableSub:
            "Upcoming and historical reservations with assigned sommelier & booth details.",
          tableHeaders: [
            "Booking Ref",
            "Seating Date & Slot",
            "Dining Zone / Table",
            "Party Size",
            "Pre-Ordered Perk",
            "Booking Status",
            "Manage",
          ],
          tableRows: [
            [
              "#RES-4092",
              "24 Oct 2026 · 20:00 PM",
              "Piazza Window Booth #04",
              "4 Guests",
              "Complimentary Rosemary Focaccia",
              { text: "Confirmed Lock", type: "basil" },
              "Modify Slot",
            ],
            [
              "#RES-4188",
              "02 Nov 2026 · 19:30 PM",
              "Chef's Wood-Fire Counter #02",
              "2 Guests",
              "Welcome Smoked Negroni Pair",
              { text: "Confirmed Lock", type: "basil" },
              "Modify Slot",
            ],
            [
              "#RES-3871",
              "18 Oct 2026 · 20:15 PM",
              "Main Dining Room #11",
              "2 Guests",
              "Birthday Gelato Candle Plate",
              { text: "Seated & Dined", type: "ink" },
              "Rebook Table",
            ],
            [
              "#RES-3610",
              "29 Sep 2026 · 18:45 PM",
              "Covered Heated Terrace #03",
              "6 Guests",
              "Sharer Charcuterie Board",
              { text: "Seated & Dined", type: "ink" },
              "Rebook Table",
            ],
          ],
          cardsTitle: "Available VIP Dining Spaces For Your Next Visit",
          cardsEyebrow: "Instant Member Table Locks",
          cards: [
            {
              img: IMG.about1,
              tag: "2–4 Guests",
              title: "Chef's Wood-Fired Pass Counter",
              desc: "Sit front-row as our pizzaiolos stretch 48-hour sourdough and sear Wagyu burgers over white oak embers.",
              meta: [
                ["Min Spend", "None for Gold Members"],
                ["Complimentary", "Amuse-Bouche Bite"],
              ],
              highlight: "Instant Lock",
              btnText: "Lock Counter Seat",
            },
            {
              img: IMG.about2,
              tag: "4–6 Guests",
              title: "Velvet Piazza Window Booths",
              desc: "Deep leather booths overlooking Covent Garden Piazza with dedicated table service and sommelier call button.",
              meta: [
                ["Acoustic Comfort", "Private Alcove"],
                ["Table Hold", "2 Hrs 15 Mins"],
              ],
              highlight: "Most Popular",
              btnText: "Lock Window Booth",
            },
            {
              img: IMG.chef,
              tag: "8–14 Guests",
              title: "The Brick Vault Tasting Cellar",
              desc: "Subterranean candlelit brick vault ideal for private celebrations, bespoke tasting menus, and wine pairings.",
              meta: [
                ["Dedicated Staff", "1 Chef + 1 Sommelier"],
                ["Custom Menu", "Included"],
              ],
              highlight: "Private Room",
              btnText: "Enquire Vault",
            },
          ],
        },
        {
          id: "cust-orders",
          navTitle: "Live Order & Reorder",
          icon: "bi-bag-check-fill",
          badge: "1 Active",
          eyebrow: "Express 18-Min Dispatch",
          heading: "Live Kitchen Tracker & One-Tap Reorder",
          description:
            "Follow your active order from the cast-iron plancha to your doorstep or reorder your top meals in one click.",
          primaryBtn: "Browse Full Menu",
          kpis: [
            {
              value: "#STK-8942",
              label: "Active Kitchen Ticket",
              sub: "Plating at Wood-Oven Pass Now",
              trend: "ETA 12:22 PM",
              trendType: "hot",
              icon: "bi-receipt-cutoff",
              color: "chili",
            },
            {
              value: "68°C Sealed",
              label: "Thermal Bag Telemetry",
              sub: "Tamper-proof craft packaging",
              trend: "Crisp Fries Vent",
              trendType: "up",
              icon: "bi-thermometer-high",
              color: "mustard",
            },
            {
              value: "£14.20 Saved",
              label: "Free Delivery Member Perk",
              sub: "Zero courier fees on orders £20+",
              trend: "Gold Benefit",
              trendType: "up",
              icon: "bi-truck",
              color: "basil",
            },
          ],
          tableTitle: "Live Order Stages & Itemised Breakdown",
          tableSub:
            "Real-time station timestamps from our Covent Garden kitchen pass.",
          tableHeaders: [
            "Station Step",
            "Dish / Component",
            "Assigned Chef / Rider",
            "Temp / Spec",
            "Timestamp",
            "Stage Status",
            "Action",
          ],
          tableRows: [
            [
              "Step 01 ·Plancha",
              "Double Truffle Wagyu Smash (Med-Rare)",
              "Sous Chef Marco R.",
              "62°C Core Sear",
              "12:07 PM",
              { text: "Plated & Rested", type: "basil" },
              "Add Note",
            ],
            [
              "Step 02 · Brick Oven",
              "48-Hr Diavola Sourdough Pizza",
              "Pizzaiolo Luca V.",
              "465°C Oak Flame",
              "12:11 PM",
              { text: "In Oven Now", type: "mustard" },
              "Add Note",
            ],
            [
              "Step 03 · Fry Pass",
              "Rosemary & Black Garlic Skin-On Fries",
              "Chef Priya K.",
              "185°C Crisp Batch",
              "12:13 PM",
              { text: "Seasoning Pass", type: "mustard" },
              "Add Note",
            ],
            [
              "Step 04 · Dispatch",
              "Thermal E-Cargo Bag #14 Handover",
              "Rider Liam O'Connor",
              "WC2E Express Route",
              "Est. 12:15 PM",
              { text: "Rider Waiting", type: "ink" },
              "Call Rider",
            ],
          ],
          cardsTitle: "Your Top 3 Most-Ordered Combos",
          cardsEyebrow: "One-Tap Express Checkout",
          cards: [
            {
              img: IMG.fav1,
              tag: "Ordered 11 Times",
              title: "The Covent Garden Smash Box",
              desc: "Double Truffle Wagyu Burger, Rosemary Skin-On Fries, Roasted Garlic Aioli Dip & Craft Cola.",
              meta: [
                ["Avg Prep", "10 Mins"],
                ["Bundle Saving", "Save £3.50"],
              ],
              highlight: "£22.50",
              btnText: "Reorder Bundle",
            },
            {
              img: IMG.fav4,
              tag: "Ordered 8 Times",
              title: "Wood-Fired Date Night Duo",
              desc: "Any two 48-hour fermented Neapolitan pizzas, Truffle Burrata Bruschetta & two Sicilian Gelato tubs.",
              meta: [
                ["Avg Prep", "12 Mins"],
                ["Bundle Saving", "Save £6.00"],
              ],
              highlight: "£38.00",
              btnText: "Reorder Bundle",
            },
            {
              img: IMG.cat3,
              tag: "Ordered 6 Times",
              title: "Crispy Buttermilk Solo Feast",
              desc: "Free-range buttermilk fried chicken thigh brioche, hot honey glaze, house slaw & charred corn ribs.",
              meta: [
                ["Avg Prep", "9 Mins"],
                ["Bundle Saving", "Save £2.50"],
              ],
              highlight: "£19.80",
              btnText: "Reorder Bundle",
            },
          ],
        },
        {
          id: "cust-rewards",
          navTitle: "Flame Rewards & Perks",
          icon: "bi-stars",
          badge: "2,840 pts",
          eyebrow: "Stackly Loyalty Club",
          heading: "Flame Rewards Points & Culinary Vouchers",
          description:
            "Earn 10 Flame Points for every £1 spent in our dining room or online. Redeem for signature dishes and chef tastings.",
          primaryBtn: "Redeem Points Now",
          kpis: [
            {
              value: "2,840 pts",
              label: "Redeemable Points",
              sub: "Equivalent to £28.40 Dining Credit",
              trend: "Never Expires",
              trendType: "up",
              icon: "bi-gem",
              color: "chili",
            },
            {
              value: "160 pts",
              label: "Away From Black Truffle VIP",
              sub: "Unlocks Chef's Table & Annual Gift",
              trend: "94% Tier Progress",
              trendType: "gold",
              icon: "bi-trophy-fill",
              color: "mustard",
            },
            {
              value: "£85.00",
              label: "Total Rewards Claimed",
              sub: "6 Complimentary Dishes Enjoyed",
              trend: "Active Member",
              trendType: "up",
              icon: "bi-gift-fill",
              color: "basil",
            },
          ],
          tableTitle: "Flame Rewards Points Ledger",
          tableSub:
            "Complete statement of points earned from dining checks and redeemed vouchers.",
          tableHeaders: [
            "Entry ID",
            "Activity Description",
            "Order / Booking Ref",
            "Points Delta",
            "Running Balance",
            "Date",
            "Reward Status",
            "Voucher",
          ],
          tableRows: [
            [
              "#FLM-904",
              "Earned on Express Order (Double Wagyu + Diavola)",
              "#STK-8942",
              "+425 pts",
              "2,840 pts",
              "Today",
              { text: "Credited", type: "basil" },
              "Details",
            ],
            [
              "#FLM-882",
              "Redeemed: Complimentary Wood-Roasted Focaccia",
              "#RES-4092",
              "-500 pts",
              "2,415 pts",
              "19 Oct 2026",
              { text: "Applied to Table", type: "mustard" },
              "Details",
            ],
            [
              "#FLM-851",
              "Earned on Dine-In Booth #04 Dinner Check",
              "#STK-8819",
              "+360 pts",
              "2,915 pts",
              "18 Oct 2026",
              { text: "Credited", type: "basil" },
              "Details",
            ],
            [
              "#FLM-819",
              "Earned on Chef's 5-Course Tasting Menu",
              "#STK-8544",
              "+1,180 pts",
              "2,555 pts",
              "04 Oct 2026",
              { text: "Credited", type: "basil" },
              "Details",
            ],
          ],
          cardsTitle: "Instant Culinary Rewards You Can Unlock Today",
          cardsEyebrow: "Apply To Dine-In Or Delivery",
          cards: [
            {
              img: IMG.cat1,
              tag: "500 Flame Points",
              title: "Wood-Roasted Garlic Focaccia",
              desc: "48-hour sourdough brushed with cold-pressed Cornish sea salt butter, rosemary, and confit garlic.",
              meta: [
                ["Normal Price", "£7.50"],
                ["Validity", "Dine-In & Delivery"],
              ],
              highlight: "500 pts",
              btnText: "Claim Voucher",
            },
            {
              img: IMG.cat4,
              tag: "900 Flame Points",
              title: "Artisan Gelato Shake of Choice",
              desc: "Choose from Bronte Pistachio, Dark Valrhona Chocolate, or Roasted Kentish Strawberry.",
              meta: [
                ["Normal Price", "£9.50"],
                ["Validity", "All Week"],
              ],
              highlight: "900 pts",
              btnText: "Claim Voucher",
            },
            {
              img: IMG.heroBurger,
              tag: "1,800 Flame Points",
              title: "Any Signature Wagyu Smash Burger",
              desc: "Redeem for our flagship Black Truffle Wagyu Smash, Smoked Bone Marrow Burger, or Triple Cheese Smash.",
              meta: [
                ["Normal Price", "Up to £19.50"],
                ["Validity", "All Week"],
              ],
              highlight: "1,800 pts",
              btnText: "Claim Voucher",
            },
          ],
        },
        {
          id: "cust-profile",
          navTitle: "Dietary & Taste Profile",
          icon: "bi-person-heart",
          badge: "Synced",
          eyebrow: "Bespoke Hospitality",
          heading: "Culinary Preferences, Allergens & Saved Details",
          description:
            "Synced directly with our kitchen KOT screens so every chef and server knows your exact preferences.",
          primaryBtn: "Update Taste Profile",
          kpis: [
            {
              value: "Medium-Rare",
              label: "Default Wagyu Sear Spec",
              sub: "Pink warm centre · Crisp lacy edges",
              trend: "Auto-Applied",
              trendType: "up",
              icon: "bi-fire",
              color: "chili",
            },
            {
              value: "Tree Nuts",
              label: "Flagged Kitchen Allergen",
              sub: "Prints in red on all kitchen tickets",
              trend: "Strict Prep Pass",
              trendType: "hot",
              icon: "bi-exclamation-diamond-fill",
              color: "mustard",
            },
            {
              value: "Verified",
              label: "Saved Delivery & Billing",
              sub: "14 Floral Street · Apple Pay & Visa",
              trend: "1-Click Ready",
              trendType: "up",
              icon: "bi-credit-card-2-front-fill",
              color: "basil",
            },
          ],
          tableTitle: "Registered Dining Preferences & Alert Rules",
          tableSub:
            "Active kitchen and front-of-house instructions attached to your member profile.",
          tableHeaders: [
            "Preference Category",
            "Custom Instruction",
            "Kitchen Station Impact",
            "Sync Scope",
            "Last Updated",
            "Status",
            "Edit",
          ],
          tableRows: [
            [
              "Allergen Safety",
              "No walnuts or hazelnuts (Pistachio OK if separate)",
              "Larder & Dessert Pass",
              "Dine-In + Delivery",
              "10 Oct 2026",
              { text: "Mandatory Alert", type: "chili" },
              "Configure",
            ],
            [
              "Burger Sear Level",
              "Medium-Rare Sear with extra house truffle aioli",
              "Cast-Iron Plancha",
              "All Orders",
              "02 Oct 2026",
              { text: "Active Default", type: "basil" },
              "Configure",
            ],
            [
              "Pizza Crust Char",
              "Traditional Neapolitan leopard-spotted char",
              "Brick Wood Oven #1",
              "All Orders",
              "19 Sep 2026",
              { text: "Active Default", type: "basil" },
              "Configure",
            ],
            [
              "Table Sommelier",
              "Prefers bold Piedmont Nebbiolo & sparkling water",
              "FOH Wine Service",
              "Dine-In Only",
              "14 Sep 2026",
              { text: "Active Note", type: "mustard" },
              "Configure",
            ],
          ],
          cardsTitle: "Saved Addresses & Dining Circle Perks",
          cardsEyebrow: "Account Settings",
          cards: [
            {
              img: IMG.cat2,
              tag: "Primary Drop",
              title: "Covent Garden Loft Address",
              desc: "Flat 4B, 14 Floral Street, Covent Garden, London WC2E 9DH. Rider instruction: Ring buzzer #4B.",
              meta: [
                ["Distance from Kitchen", "0.4 Miles"],
                ["Est. Transit", "6 Mins by E-Bike"],
              ],
              highlight: "Default Zone",
              btnText: "Edit Address",
            },
            {
              img: IMG.cat5,
              tag: "Office Drop",
              title: "Soho Studio Address",
              desc: "3rd Floor, 22 Wardour Street, Soho, London W1D 6QQ. Leave with ground-floor concierge desk.",
              meta: [
                ["Distance from Kitchen", "0.7 Miles"],
                ["Est. Transit", "9 Mins by E-Bike"],
              ],
              highlight: "Work Zone",
              btnText: "Edit Address",
            },
            {
              img: IMG.cat6,
              tag: "Anniversary Perk",
              title: "Celebration & Birthday Calendar",
              desc: "Registered Birthday: 14 November. Unlocks complimentary Artisan Gelato Shake and £20 dining voucher.",
              meta: [
                ["Next Reward", "In 23 Days"],
                ["Auto-Email", "Enabled"],
              ],
              highlight: "Active Perk",
              btnText: "Edit Dates",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // ROLE 2: HEAD CHEF / KITCHEN STAFF
    // =========================================================================
    chef: {
      roleKey: "chef",
      roleLabel: "Head Chef / Kitchen Staff",
      badgeIcon: "bi-fire",
      portalTitle: "Wood-Fired Pass & Culinary Brigade Command",
      portalSubtitle:
        "Monitor live KOT tickets, 465°C brick-oven telemetry, 48-hour dough fermentation & larder stock.",
      kitchenNote: "Pass Status: Peak Service · 14 Active KOTs · 465°C Deck",
      sections: [
        {
          id: "chef-overview",
          navTitle: "Live Kitchen Pass",
          icon: "bi-fire",
          badge: "14 KOTs",
          eyebrow: "Hot Pass Command",
          heading: "Live Kitchen Order Tickets (KOT) & Oven Telemetry",
          description:
            "Real-time ticket queue across the Cast-Iron Smash Plancha, Neapolitan Brick Oven, and Cold Larder Pass.",
          primaryBtn: "Fire Next Batch",
          kpis: [
            {
              value: "14 Active",
              label: "Tickets On The Pass",
              sub: "9 Dine-In · 5 Express Delivery",
              trend: "0 Overdue Tickets",
              trendType: "up",
              icon: "bi-receipt",
              color: "chili",
            },
            {
              value: "465°C",
              label: "Brick Oven #1 Deck Temp",
              sub: "Kiln-dried British white oak embers",
              trend: "Optimal Leopard Char",
              trendType: "hot",
              icon: "bi-thermometer-sun",
              color: "mustard",
            },
            {
              value: "11m 20s",
              label: "Avg Ticket Turnaround",
              sub: "Target benchmark: < 14m 00s",
              trend: "2m 40s Faster",
              trendType: "up",
              icon: "bi-stopwatch-fill",
              color: "basil",
            },
            {
              value: "9 / 9 Chefs",
              label: "Brigade On Station",
              sub: "All hot & cold stations manned",
              trend: "Full Strength",
              trendType: "gold",
              icon: "bi-people-fill",
              color: "ink",
            },
          ],
          tableTitle: "Active Kitchen Order Ticket (KOT) Queue",
          tableSub:
            "Ordered chronologically by fire priority with allergen flags and station routing.",
          tableHeaders: [
            "KOT #",
            "Destination",
            "Plates & Modifiers",
            "Station",
            "Elapsed",
            "Pass Status",
            "Pass Control",
          ],
          tableRows: [
            [
              "KOT #409",
              "Booth #04 (Dine-In)",
              "2× Black Truffle Wagyu Smash (Med-Rare), 1× Diavola Pizza (No Olives)",
              "Plancha + Oven",
              "08m 40s",
              { text: "Plating At Pass", type: "chili" },
              "Bump Ticket",
            ],
            [
              "KOT #410",
              "Rider #14 (WC2E)",
              "1× Double Cheese Smash, 1× Nduja Honey Pizza, 2× Rosemary Fries",
              "Plancha + Fry",
              "06m 15s",
              { text: "Searing / In Oven", type: "mustard" },
              "Bump Ticket",
            ],
            [
              "KOT #411",
              "Chef's Counter #02",
              "2× Tasting Course #3: Smoked Bone Marrow & Sourdough Flatbread",
              "Wood-Fire Grill",
              "04m 50s",
              { text: "Firing Now", type: "mustard" },
              "Bump Ticket",
            ],
            [
              "KOT #412",
              "Table #11 (ALLERGY)",
              "1× Burrata Margherita (NUT-FREE BOARD), 1× Charred Hispi Cabbage",
              "Sanitised Oven #2",
              "03m 10s",
              { text: "Allergen Check", type: "chili" },
              "Verify & Fire",
            ],
            [
              "KOT #413",
              "Rider #08 (Soho W1D)",
              "3× Buttermilk Chicken Brioche, 3× Pistachio Gelato Shakes",
              "Fry + Cold Bar",
              "01m 25s",
              { text: "Prep Queued", type: "basil" },
              "Start Fire",
            ],
          ],
          cardsTitle: "Live Culinary Station Telemetry",
          cardsEyebrow: "Hardware & Line Load",
          cards: [
            {
              img: IMG.about1,
              tag: "465°C Active",
              title: "Neapolitan Wood-Fired Oven #1",
              desc: "Hand-built Naples clay dome fuelled by seasoned Sussex oak. Firing 4 pizzas simultaneously at 90 seconds per bake.",
              meta: [
                ["Pizzaiolo Lead", "Chef Luca V."],
                ["Ash Clear Due", "In 2 Hrs 15 Mins"],
              ],
              highlight: "94% Efficiency",
              btnText: "Log Oven Temp",
            },
            {
              img: IMG.heroBurger,
              tag: "245°C Surface",
              title: "Cast-Iron Wagyu Smash Plancha",
              desc: "Dual-zone heavy chrome & cast-iron flat top for caramelised lacy Maillard crusts on 45-day aged Hereford beef.",
              meta: [
                ["Grill Lead", "Sous Chef Marco R."],
                ["Active Patties", "12 Searing Now"],
              ],
              highlight: "Optimal Sear",
              btnText: "Log Plancha Check",
            },
            {
              img: IMG.fav3,
              tag: "-14°C Pozzetti",
              title: "Cold Larder & Gelato Pozzetti",
              desc: "Dedicated marble larder station for Puglia burrata plating, heritage salads, and spun Sicilian gelato shakes.",
              meta: [
                ["Pastry Lead", "Chef Elena S."],
                ["Chiller Temp", "2.1°C Verified"],
              ],
              highlight: "HACCP Passed",
              btnText: "View Cold Log",
            },
          ],
        },
        {
          id: "chef-prep",
          navTitle: "Prep & Dough Fermentation",
          icon: "bi-hourglass-split",
          badge: "6 Batches",
          eyebrow: "48-Hour Artisanal Craft",
          heading: "Sourdough Fermentation & Morning Mise-en-Place",
          description:
            "Track Biga starter hydration, 48-hour cold fermentation crates, Wagyu butchery portioning, and house sauces.",
          primaryBtn: "Log New Dough Batch",
          kpis: [
            {
              value: "72% Hydro",
              label: "Sourdough Hydration Spec",
              sub: "Caputo '00' & Stoneground British Wheat",
              trend: "48h Cold Proof",
              trendType: "up",
              icon: "bi-droplet-half",
              color: "chili",
            },
            {
              value: "185 Balls",
              label: "Proofed Dough Ready (280g)",
              sub: "6 Proofing Crates at 18°C Ambient",
              trend: "Covers Dinner Peak",
              trendType: "up",
              icon: "bi-box-seam-fill",
              color: "mustard",
            },
            {
              value: "210 Patties",
              label: "Freshly Ground Wagyu Blend",
              sub: "70% Chuck · 20% Brisket · 10% Bone Marrow",
              trend: "Butchered 08:30 AM",
              trendType: "up",
              icon: "bi-check2-all",
              color: "basil",
            },
          ],
          tableTitle: "Active Fermentation & Mise-en-Place Batch Schedule",
          tableSub:
            "Every batch tracked by pH, internal temperature, and peak service window.",
          tableHeaders: [
            "Batch ID",
            "Prep / Dough Item",
            "Spec / Hydration",
            "Started At",
            "Ready Window",
            "Batch Status",
            "Quality Sign-Off",
          ],
          tableRows: [
            [
              "#FERM-201",
              "Neapolitan Biga Sourdough (Crates 1–6)",
              "72% Hydration · pH 4.6",
              "20 Oct · 14:00",
              "Today · 17:00–23:00",
              { text: "Peak Proof Ready", type: "basil" },
              "Inspect Crates",
            ],
            [
              "#FERM-202",
              "Rosemary & Sea Salt Focaccia Trays",
              "80% Hydration · Extra Virgin",
              "21 Oct · 09:00",
              "Today · All Day",
              { text: "Baked & Resting", type: "basil" },
              "Inspect Trays",
            ],
            [
              "#PREP-408",
              "Dry-Aged Hereford & Wagyu Smash Balls (95g)",
              "22% Fat Ratio · 2°C Chill",
              "Today · 08:00",
              "Today · Lunch/Dinner",
              { text: "Portioned in Chiller", type: "basil" },
              "Verify Weight",
            ],
            [
              "#PREP-412",
              "House Black Truffle & Roasted Garlic Aioli",
              "Pasteurised Cotswold Yolk",
              "Today · 09:30",
              "48-Hr Shelf Life",
              { text: "14.5L Bottled", type: "mustard" },
              "Print Labels",
            ],
          ],
          cardsTitle: "Shift Prep Checklists by Section",
          cardsEyebrow: "Brigade Standards",
          cards: [
            {
              img: IMG.cat2,
              tag: "Bakery Section",
              title: "Dough Balling & Biga Feeding",
              desc: "Refresh mother starter at 07:00 AM, scale 280g dough balls for tomorrow's dinner service, and log retarder humidity.",
              meta: [
                ["Assigned To", "Chef Luca V."],
                ["Completion", "100% Verified"],
              ],
              highlight: "6/6 Tasks Done",
              btnText: "View Checklist",
            },
            {
              img: IMG.cat1,
              tag: "Butchery Section",
              title: "Wagyu Trim & Brisket Grind",
              desc: "Trim 45-day dry-aged rib cap, coarse-grind with smoked bone marrow, and portion into 95g smash spheres.",
              meta: [
                ["Assigned To", "Sous Chef Marco R."],
                ["Completion", "100% Verified"],
              ],
              highlight: "5/5 Tasks Done",
              btnText: "View Checklist",
            },
            {
              img: IMG.cat5,
              tag: "Sauce & Larder",
              title: "San Marzano & Pickled Chilies",
              desc: "Hand-crush DOP San Marzano tomatoes with sea salt (no cooking), slice pickled jalapeños, and whip truffle butter.",
              meta: [
                ["Assigned To", "Chef Priya K."],
                ["Completion", "90% In Progress"],
              ],
              highlight: "1 Task Left",
              btnText: "Complete Prep",
            },
          ],
        },
        {
          id: "chef-recipes",
          navTitle: "Recipe Specs & Allergens",
          icon: "bi-journal-bookmark-fill",
          badge: "64 Dishes",
          eyebrow: "Culinary Bible",
          heading: "Master Plating Specs, Costs & 14-Allergen Matrix",
          description:
            "Standardised gram weights, cooking temperatures, gross margin targets, and UK FSA allergen compliance.",
          primaryBtn: "Add Seasonal Spec",
          kpis: [
            {
              value: "64 Plates",
              label: "Standardised Recipe Cards",
              sub: "With high-res plating diagrams",
              trend: "Autumn Menu v4.2",
              trendType: "up",
              icon: "bi-journal-richtext",
              color: "chili",
            },
            {
              value: "74.2%",
              label: "Average Gross Kitchen Margin",
              sub: "Food Cost Ratio: 25.8% across menu",
              trend: "+1.4% vs Target",
              trendType: "up",
              icon: "bi-graph-up-arrow",
              color: "basil",
            },
            {
              value: "100% Audited",
              label: "FSA 14-Allergen Compliance",
              sub: "Cross-contamination protocols active",
              trend: "Zero Incidents",
              trendType: "gold",
              icon: "bi-shield-fill-check",
              color: "mustard",
            },
          ],
          tableTitle: "Signature Dish Specification & Allergen Directory",
          tableSub:
            "Official kitchen build cards for Stackly's highest-volume plates.",
          tableHeaders: [
            "Spec Code",
            "Signature Dish Name",
            "Cook Temp & Time",
            "Portion Weight",
            "Declared Allergens",
            "Food Cost",
            "Spec Status",
            "Spec Sheet",
          ],
          tableRows: [
            [
              "SPEC-B01",
              "Black Truffle Aged Wagyu Smash",
              "245°C Plancha · 2m 30s",
              "340g Plated",
              "Gluten, Milk, Egg, Mustard",
              "£4.65 (24.6%)",
              { text: "Active Spec", type: "basil" },
              "Open Card",
            ],
            [
              "SPEC-P04",
              "48-Hr Diavola & Hot Honey Pizza",
              "465°C Wood Oven · 90s",
              "460g Plated",
              "Gluten, Milk, Sulphites",
              "£3.80 (21.7%)",
              { text: "Active Spec", type: "basil" },
              "Open Card",
            ],
            [
              "SPEC-C02",
              "Buttermilk Fried Chicken Brioche",
              "175°C Pressure Fry · 6m",
              "355g Plated",
              "Gluten, Milk, Egg, Celery",
              "£4.10 (24.8%)",
              { text: "Active Spec", type: "basil" },
              "Open Card",
            ],
            [
              "SPEC-S07",
              "Truffle Burrata & Heritage Tomato",
              "Chilled 8°C · Torch Finish",
              "260g Plated",
              "Milk (Gluten-Free Option)",
              "£3.45 (26.5%)",
              { text: "Active Spec", type: "basil" },
              "Open Card",
            ],
          ],
          cardsTitle: "Winter Tasting R&D Specials In Test Kitchen",
          cardsEyebrow: "Chef's Experimental Pass",
          cards: [
            {
              img: IMG.fav1,
              tag: "Launching 1 Nov",
              title: "Venison & Blackberry Brioche Smash",
              desc: " Scottish wild venison patty, Montgomery cheddar, pickled blackberry jus, and crispy sage leaves.",
              meta: [
                ["Target Price", "£19.50"],
                ["Est. Food Cost", "26.1%"],
              ],
              highlight: "Tasting Approved",
              btnText: "Edit R&D Spec",
            },
            {
              img: IMG.fav2,
              tag: "Launching 1 Nov",
              title: "White Alba Truffle & Taleggio Pizza",
              desc: "White base sourdough with melted Lombardy Taleggio, roasted chestnut mushrooms, and shaved Alba truffle.",
              meta: [
                ["Target Price", "£24.00"],
                ["Est. Food Cost", "28.4%"],
              ],
              highlight: "VIP Exclusive",
              btnText: "Edit R&D Spec",
            },
            {
              img: IMG.fav4,
              tag: "In Testing",
              title: "Burnt Basque Blood Orange Cheesecake",
              desc: "Caramelised wood-oven baked cheesecake infused with Sicilian blood orange zest and crème fraîche.",
              meta: [
                ["Target Price", "£9.80"],
                ["Est. Food Cost", "21.0%"],
              ],
              highlight: "Trial #3",
              btnText: "Edit R&D Spec",
            },
          ],
        },
        {
          id: "chef-inventory",
          navTitle: "Larder & Cold-Room Stock",
          icon: "bi-box2-heart-fill",
          badge: "4 Low",
          eyebrow: "Artisan Purveyors",
          heading: "Walk-In Chiller, Dry-Aging Locker & Dry Store Inventory",
          description:
            "Monitor live par levels across British farm meat cuts, Italian DOP imports, and Covent Garden morning market produce.",
          primaryBtn: "Raise Purveyor Order",
          kpis: [
            {
              value: "4 Items",
              label: "Below Par Level Alert",
              sub: "Burrata, Truffle Paste, Brioche, Nduja",
              trend: "Order Before 23:00",
              trendType: "hot",
              icon: "bi-exclamation-triangle-fill",
              color: "chili",
            },
            {
              value: "1.8°C",
              label: "Dry-Aging Meat Vault",
              sub: "82% Relative Humidity · UV Active",
              trend: "42Loins Aging",
              trendType: "up",
              icon: "bi-snow2",
              color: "basil",
            },
            {
              value: "£14,820",
              label: "Current Larder Valuation",
              sub: "Zero spoilage waste logged today",
              trend: "FIFO Verified",
              trendType: "gold",
              icon: "bi-archive-fill",
              color: "mustard",
            },
          ],
          tableTitle: "Critical Ingredient Stock & Par Level Ledger",
          tableSub:
            "Real-time inventory counts synced with POS deductions and morning deliveries.",
          tableHeaders: [
            "Ingredient SKU",
            "Artisan Item & Purveyor",
            "Storage Zone",
            "Current Stock",
            "Par Target",
            "Stock Status",
            "Restock",
          ],
          tableRows: [
            [
              "ING-104",
              "Puglia Artisanal Burrata (125g Tubs) · Belazu",
              "Dairy Chiller #2",
              "18 Tubs",
              "45 Tubs",
              { text: "Low Stock Alert", type: "chili" },
              "Order 40 Tubs",
            ],
            [
              "ING-109",
              "Umbrian Black Winter Truffle Carpaccio",
              "Dry Vault #1",
              "6 Jars",
              "15 Jars",
              { text: "Low Stock Alert", type: "chili" },
              "Order 12 Jars",
            ],
            [
              "ING-201",
              "45-Day Hereford & Wagyu Chuck/Brisket",
              "Meat Locker #1",
              "68.5 kg",
              "60.0 kg",
              { text: "Optimal Stock", type: "basil" },
              "View Lot #",
            ],
            [
              "ING-305",
              "Caputo '00' Blue Pizzeria Flour (25kg Sacks)",
              "Ambient Bakery",
              "14 Sacks",
              "12 Sacks",
              { text: "Optimal Stock", type: "basil" },
              "View Lot #",
            ],
            [
              "ING-411",
              "Kiln-Dried Sussex White Oak Logs (Crates)",
              "Wood Store",
              "9 Crates",
              "8 Crates",
              { text: "Optimal Stock", type: "basil" },
              "Schedule Drop",
            ],
          ],
          cardsTitle: "Cold-Chain & Storage Zone Health",
          cardsEyebrow: "EHO 5-Star Hygiene Telemetry",
          cards: [
            {
              img: IMG.about2,
              tag: "1.8°C · 82% RH",
              title: "Himalayan Salt Dry-Aging Vault",
              desc: "Houses our grass-fed Hereford and British Wagyu primal cuts on bone for 45 days before daily grinding.",
              meta: [
                ["Last Probe Check", "11:30 AM Today"],
                ["Air Filtration", "UV-C Active"],
              ],
              highlight: "Optimal Vault",
              btnText: "Download Log",
            },
            {
              img: IMG.cat3,
              tag: "2.4°C · 65% RH",
              title: "Walk-In Produce & Dairy Room",
              desc: "Stores Covent Garden market herbs, heritage tomatoes, Fior di Latte mozzarella, and Cotswold free-range eggs.",
              meta: [
                ["Last Probe Check", "11:30 AM Today"],
                ["FIFO Audit", "Passed 07:00 AM"],
              ],
              highlight: "Optimal Chill",
              btnText: "Download Log",
            },
            {
              img: IMG.cat6,
              tag: "16.5°C Ambient",
              title: "Italian DOP Dry Goods Larder",
              desc: "Climate-controlled shelving for San Marzano tomatoes, extra-virgin Sicilian olive oil, and artisan flours.",
              meta: [
                ["Last Stocktake", "Yesterday 23:30"],
                ["Variance", "0.1% Minimal"],
              ],
              highlight: "Audited",
              btnText: "Download Log",
            },
          ],
        },
        {
          id: "chef-brigade",
          navTitle: "Brigade Roster & Stations",
          icon: "bi-people-fill",
          badge: "9 Active",
          eyebrow: "Culinary Team",
          heading: "Kitchen Brigade Station Roster & Shift Handover",
          description:
            "Manage line station assignments, ticket throughput per chef, and EHO food safety certifications.",
          primaryBtn: "Publish Next Roster",
          kpis: [
            {
              value: "9 Chefs",
              label: "Active Evening Brigade",
              sub: "1 Head · 2 Sous · 4 CdP · 2 Commis",
              trend: "100% Punctual",
              trendType: "up",
              icon: "bi-person-check-fill",
              color: "basil",
            },
            {
              value: "99.4%",
              label: "Pass Quality Accuracy",
              sub: "Only 1 refire across 182 plates today",
              trend: "Elite Standard",
              trendType: "up",
              icon: "bi-patch-check-fill",
              color: "chili",
            },
            {
              value: "Level 3",
              label: "Food Hygiene Certified",
              sub: "All brigade members EHO accredited",
              trend: "5-Star Rating",
              trendType: "gold",
              icon: "bi-award-fill",
              color: "mustard",
            },
          ],
          tableTitle: "Today's Kitchen Brigade Station Assignments",
          tableSub:
            "Live station ownership and ticket completion metrics for today's service.",
          tableHeaders: [
            "Brigade ID",
            "Chef Name & Rank",
            "Assigned Station",
            "Shift Window",
            "Plates Fired",
            "Station Status",
            "Action",
          ],
          tableRows: [
            [
              "CHEF-01",
              "Marco Rossi · Senior Sous Chef",
              "Hot Pass & Cast-Iron Plancha",
              "11:00 – 23:00",
              "68 Plates",
              { text: "Leading Pass", type: "chili" },
              "Shift Note",
            ],
            [
              "CHEF-02",
              "Luca Verdi · Master Pizzaiolo",
              "Wood-Fired Brick Oven #1",
              "11:30 – 23:00",
              "54 Pizzas",
              { text: "Active Station", type: "basil" },
              "Shift Note",
            ],
            [
              "CHEF-03",
              "Priya Kapoor · Chef de Partie",
              "Buttermilk Fry & Hot Sides",
              "12:00 – 22:30",
              "49 Sides",
              { text: "Active Station", type: "basil" },
              "Shift Note",
            ],
            [
              "CHEF-04",
              "Elena Santoro · Pastry & Larder",
              "Burrata Bar & Gelato Pozzetti",
              "12:00 – 22:30",
              "41 Plates",
              { text: "Active Station", type: "basil" },
              "Shift Note",
            ],
          ],
          cardsTitle: "Pre-Service Kitchen Briefing Cards",
          cardsEyebrow: "Brigade Communications",
          cards: [
            {
              img: IMG.chef,
              tag: "VIP Alert · 20:00",
              title: "Table #04 & Counter #02 Notes",
              desc: "Gold Member reservation at Booth #04. Send complimentary wood-roasted rosemary focaccia with first drinks.",
              meta: [
                ["Allergen Check", "Tree Nut Free"],
                ["Exec Sign-Off", "Head Chef"],
              ],
              highlight: "Priority Note",
              btnText: "Acknowledge",
            },
            {
              img: IMG.fav2,
              tag: "Portion Watch",
              title: "Limited Special: Bone Marrow Burger",
              desc: "Only 16 portions of smoked Hereford bone marrow canoes remaining for tonight's dinner service. Update FOH at 8 left.",
              meta: [
                ["Remaining", "16 Portions"],
                ["POS Auto-Count", "Enabled"],
              ],
              highlight: "16 Left",
              btnText: "Update Count",
            },
            {
              img: IMG.about1,
              tag: "23:30 Close",
              title: "Wood-Oven Ash & Flue Sweep",
              desc: "Deep brush brick deck #1 after final 23:15 order, bank white oak embers to side hearth, and log closing chiller temps.",
              meta: [
                ["Assigned", "Closing Team"],
                ["Est. Time", "25 Mins"],
              ],
              highlight: "Night Protocol",
              btnText: "Log Sign-Off",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // ROLE 3: RESTAURANT MANAGER
    // =========================================================================
    manager: {
      roleKey: "manager",
      roleLabel: "Restaurant Manager",
      badgeIcon: "bi-building-check",
      portalTitle: "Covent Garden Floor & Hospitality Operations",
      portalSubtitle:
        "Oversee live dining room table turns, reservations, FOH server sections, supplier POs & guest satisfaction.",
      kitchenNote: "Dining Room: 88% Occupancy · 37/42 Tables Seated",
      sections: [
        {
          id: "mgr-overview",
          navTitle: "Floor & Shift Overview",
          icon: "bi-columns-gap",
          badge: "88% Full",
          eyebrow: "Front-Of-House Command",
          heading: "Live Dining Room Occupancy & Shift Sales",
          description:
            "Real-time floor map metrics, table turn velocity, average spend per cover, and active VIP booths.",
          primaryBtn: "Open Floor Plan",
          kpis: [
            {
              value: "37 / 42",
              label: "Tables Currently Seated",
              sub: "88% Floor Occupancy · 5 Tables Turning",
              trend: "+12% vs Last Fri",
              trendType: "up",
              icon: "bi-grid-3x3-gap-fill",
              color: "chili",
            },
            {
              value: "£8,420.50",
              label: "Today's Running Floor Sales",
              sub: "214 Covers · £39.35 Avg Spend/Head",
              trend: "106% of Target",
              trendType: "up",
              icon: "bi-currency-pound",
              color: "basil",
            },
            {
              value: "68 Mins",
              label: "Avg Table Turn Time",
              sub: "Target: 70 Mins for 2–4 Tops",
              trend: "Smooth Flow",
              trendType: "gold",
              icon: "bi-clock-history",
              color: "mustard",
            },
            {
              value: "4.94 ★",
              label: "Live Shift Guest Rating",
              sub: "Based on 34 QR table check-outs",
              trend: "Zero Escalations",
              trendType: "up",
              icon: "bi-star-fill",
              color: "ink",
            },
          ],
          tableTitle: "Live Dining Room Table Status & Check Monitor",
          tableSub:
            "Active tables across Main Piazza Hall, Chef's Counter, and Heated Terrace.",
          tableHeaders: [
            "Table #",
            "Dining Zone",
            "Covers",
            "Assigned Server",
            "Seated Duration",
            "Running Check",
            "Course Stage",
            "Floor Action",
          ],
          tableRows: [
            [
              "Booth #04",
              "Piazza Window Alcove",
              "4 Guests",
              "Clara Vance",
              "42 Mins",
              "£146.80",
              { text: "Mains On Table", type: "basil" },
              "View Check",
            ],
            [
              "Counter #02",
              "Chef's Wood-Fire Pass",
              "2 Guests",
              "Oliver Grant",
              "55 Mins",
              "£118.00",
              { text: "Course 4 Firing", type: "mustard" },
              "View Check",
            ],
            [
              "Table #11",
              "Main Dining Hall",
              "4 Guests",
              "Clara Vance",
              "18 Mins",
              "£64.50",
              { text: "Starters Served", type: "basil" },
              "View Check",
            ],
            [
              "Vault #01",
              "Private Brick Cellar",
              "10 Guests",
              "Hannah Sterling",
              "1h 24m",
              "£540.00",
              { text: "Dessert & Digestif", type: "chili" },
              "Print Bill",
            ],
            [
              "Terrace #03",
              "Covered Piazza Terrace",
              "2 Guests",
              "Samir Patel",
              "64 Mins",
              "£72.40",
              { text: "Card Paid · Bussing", type: "ink" },
              "Mark Clean",
            ],
          ],
          cardsTitle: "Dining Zone Capacity & Revenue Breakdown",
          cardsEyebrow: "24 Covent Garden Piazza",
          cards: [
            {
              img: IMG.about1,
              tag: "22 / 24 Tables",
              title: "Main Piazza Dining Hall",
              desc: "High-energy open dining room featuring velvet booths, brass pendant lighting, and direct acoustics from the pass.",
              meta: [
                ["Shift Revenue", "£4,890.00"],
                ["Waitlist Queue", "3 Walk-In Parties"],
              ],
              highlight: "92% Full",
              btnText: "Manage Section",
            },
            {
              img: IMG.about2,
              tag: "10 / 10 Seats",
              title: "Chef's Fire Counter Bar",
              desc: "10-seat marble counter encircling the Neapolitan wood oven and Wagyu smash plancha. Fully booked all evening.",
              meta: [
                ["Shift Revenue", "£1,680.50"],
                ["Avg Check/Head", "£52.00"],
              ],
              highlight: "100% Full",
              btnText: "Manage Section",
            },
            {
              img: IMG.chef,
              tag: "5 / 8 Tables",
              title: "Heated Terrace & Brick Vault",
              desc: "All-weather heated Covent Garden terrace plus our 14-seat subterranean candlelit private dining vault.",
              meta: [
                ["Shift Revenue", "£1,850.00"],
                ["Heaters & Music", "Active"],
              ],
              highlight: "78% Full",
              btnText: "Manage Section",
            },
          ],
        },
        {
          id: "mgr-reservations",
          navTitle: "Reservations & Waitlist",
          icon: "bi-calendar2-check-fill",
          badge: "58 Booked",
          eyebrow: "Host Desk Manifest",
          heading: "Evening Reservation Book & Walk-In Pager Queue",
          description:
            "Coordinate incoming reservations, VIP table allocations, dietary flags, and SMS walk-in waitlist quotes.",
          primaryBtn: "Add Walk-In Party",
          kpis: [
            {
              value: "58 Bookings",
              label: "Confirmed Tonight (218 Covers)",
              sub: "41 Seated · 17 Arriving 20:00–21:30",
              trend: "98% Show Rate",
              trendType: "up",
              icon: "bi-journal-check",
              color: "chili",
            },
            {
              value: "6 Parties",
              label: "Live Walk-In SMS Waitlist",
              sub: "Avg quoted wait: 18 Mins at Bar",
              trend: "4 At Cocktail Bar",
              trendType: "gold",
              icon: "bi-hourglass-bottom",
              color: "mustard",
            },
            {
              value: "9 Tables",
              label: "VIP / Celebration Flags",
              sub: "3 Birthdays · 2 Anniversaries · 4 Gold",
              trend: "Briefed to FOH",
              trendType: "up",
              icon: "bi-stars",
              color: "basil",
            },
          ],
          tableTitle: "Upcoming Arrivals & Host Desk Allocation",
          tableSub:
            "Next 90 minutes of confirmed table locks with pre-assigned booths.",
          tableHeaders: [
            "Booking ID",
            "Guest Name & Tier",
            "Party",
            "Slot Time",
            "Assigned Table",
            "Special Request / Allergy",
            "Status",
            "Host Action",
          ],
          tableRows: [
            [
              "#RES-4092",
              "Arthur Pendelton (Gold Member)",
              "4 Pax",
              "20:00 PM",
              "Window Booth #04",
              "Tree Nut Allergy · Free Focaccia",
              { text: "Checked In", type: "basil" },
              "Seat Party",
            ],
            [
              "#RES-4098",
              "Lady Camille Sterling (VIP)",
              "2 Pax",
              "20:15 PM",
              "Chef's Counter #05",
              "Anniversary Prosecco on Arrival",
              { text: "SMS Confirmed", type: "mustard" },
              "Seat Party",
            ],
            [
              "#RES-4104",
              "Marcus Thorne & Guests",
              "6 Pax",
              "20:30 PM",
              "Round Booth #14",
              "1 Gluten-Free Pizza Base Required",
              { text: "SMS Confirmed", type: "mustard" },
              "Seat Party",
            ],
            [
              "#WLK-112",
              "Walk-In: Sophie & Dan",
              "2 Pax",
              "Est. 20:20",
              "Terrace #03 (Turning)",
              "Waiting at Negroni Bar",
              { text: "Paged via SMS", type: "chili" },
              "Seat Party",
            ],
          ],
          cardsTitle: "Host Desk & Private Dining Controls",
          cardsEyebrow: "Guest Flow Optimization",
          cards: [
            {
              img: IMG.fav1,
              tag: "Waitlist Pager",
              title: "Bar Tab to Dining Table Transfer",
              desc: "Automatically transfer walk-in guests' Negroni & starter tabs from the front bar directly to their seated table check.",
              meta: [
                ["Active Bar Tabs", "6 Open"],
                ["POS Sync", "Automatic"],
              ],
              highlight: "Seamless Transfer",
              btnText: "Transfer Tab",
            },
            {
              img: IMG.fav3,
              tag: "Zero No-Shows",
              title: "Stripe Card Pre-Auth Protection",
              desc: "£15/head deposit hold active for Friday & Saturday peak seatings of 4+ guests. 100% attendance achieved tonight.",
              meta: [
                ["Protected Covers", "142 Covers"],
                ["Disputes", "0 Active"],
              ],
              highlight: "£2,130 Protected",
              btnText: "View Pre-Auths",
            },
            {
              img: IMG.about2,
              tag: "Corporate Events",
              title: "Upcoming Private Vault Enquiries",
              desc: "3 new corporate Christmas and tasting dinner enquiries for the 14-seat Brick Vault Cellar awaiting manager quote.",
              meta: [
                ["Est. Value", "£4,200 Total"],
                ["Response SLA", "< 2 Hours"],
              ],
              highlight: "3 Pending",
              btnText: "Send Proposals",
            },
          ],
        },
        {
          id: "mgr-staff",
          navTitle: "FOH Staff & Shift Roster",
          icon: "bi-person-workspace",
          badge: "14 Staff",
          eyebrow: "Hospitality Team",
          heading: "Front-of-House Server Sections, Bartenders & Tronc Tips",
          description:
            "Track server station assignments, average dessert/wine upsell conversion, and transparent daily Tronc tip distribution.",
          primaryBtn: "Edit Shift Roster",
          kpis: [
            {
              value: "14 FOH Staff",
              label: "On The Floor Tonight",
              sub: "8 Servers · 3 Sommeliers/Bar · 3 Hosts",
              trend: "Full Coverage",
              trendType: "up",
              icon: "bi-people-fill",
              color: "basil",
            },
            {
              value: "£1,640",
              label: "Top Server Shift Sales",
              sub: "Clara Vance · Piazza Booth Section",
              trend: "£44.30 Avg/Cover",
              trendType: "up",
              icon: "bi-award-fill",
              color: "chili",
            },
            {
              value: "£942.50",
              label: "Daily Service Charge Pool",
              sub: "100% distributed to kitchen & FOH team",
              trend: "12.5% Tronc",
              trendType: "gold",
              icon: "bi-cash-stack",
              color: "mustard",
            },
          ],
          tableTitle: "Active FOH Server Sections & Performance",
          tableSub:
            "Real-time sales, covers served, and wine/dessert attachment rate by server.",
          tableHeaders: [
            "Staff ID",
            "Team Member & Role",
            "Assigned Floor Section",
            "Shift Hours",
            "Covers Served",
            "Gross Sales",
            "Status",
            "Manage",
          ],
          tableRows: [
            [
              "FOH-101",
              "Clara Vance · Head Waitress",
              "Piazza Booths #01–#08",
              "16:00 – Close",
              "48 Covers",
              "£1,640.00",
              { text: "On Floor", type: "basil" },
              "Reassign",
            ],
            [
              "FOH-104",
              "Oliver Grant · Counter Lead",
              "Chef's Fire Counter #01–#10",
              "16:30 – Close",
              "32 Covers",
              "£1,490.50",
              { text: "On Floor", type: "basil" },
              "Reassign",
            ],
            [
              "FOH-108",
              "Hannah Sterling · Sommelier",
              "Private Vault & Wine Pairing",
              "17:00 – Close",
              "38 Covers",
              "£2,180.00",
              { text: "In Vault #01", type: "mustard" },
              "Reassign",
            ],
            [
              "FOH-112",
              "Samir Patel · Senior Server",
              "Covered Terrace #01–#08",
              "16:00 – Close",
              "44 Covers",
              "£1,390.00",
              { text: "On Floor", type: "basil" },
              "Reassign",
            ],
          ],
          cardsTitle: "Pre-Shift Briefing & Upsell Incentives",
          cardsEyebrow: "FOH Excellence",
          cards: [
            {
              img: IMG.cat4,
              tag: "Sommelier Push",
              title: "Barolo By-The-Glass Pairing",
              desc: "Recommend 2019 Massolino Barolo (£14/glass) with the Black Truffle Wagyu Smash. £50 bottle bonus for top upseller.",
              meta: [
                ["Glasses Sold Today", "29 Glasses"],
                ["Lead Seller", "Hannah S."],
              ],
              highlight: "+24% Wine Mix",
              btnText: "View Tasting Note",
            },
            {
              img: IMG.fav3,
              tag: "Dessert Attachment",
              title: "Sicilian Pistachio Gelato Push",
              desc: "Target 45% dessert & shake attachment rate on all booth tables before presenting the bill.",
              meta: [
                ["Current Rate", "48.2% Achieved"],
                ["Target", "45.0%"],
              ],
              highlight: "Target Beat",
              btnText: "View Leaderboard",
            },
            {
              img: IMG.about1,
              tag: "Compliance",
              title: "Allergen Verbal Confirmation",
              desc: "Every server must ask the mandatory allergen question upon seating and stamp the POS ticket before firing drinks.",
              meta: [
                ["POS Audit", "100% Stamped"],
                ["Incidents", "0 Today"],
              ],
              highlight: "100% Compliant",
              btnText: "Review Protocol",
            },
          ],
        },
        {
          id: "mgr-suppliers",
          navTitle: "Supplier & Bar Orders",
          icon: "bi-truck-flatbed",
          badge: "5 POs",
          eyebrow: "Purveyor & Cellar Chain",
          heading: "Beverage Cellar, Artisan Suppliers & Purchase Orders",
          description:
            "Approve daily Covent Garden market invoices, craft brewery keg drops, and eco-packaging restocks.",
          primaryBtn: "Create Purchase Order",
          kpis: [
            {
              value: "5 Active POs",
              label: "Scheduled Morning Deliveries",
              sub: "Arriving 06:00–08:30 AM tomorrow",
              trend: "Loading Bay Booked",
              trendType: "up",
              icon: "bi-clipboard2-check-fill",
              color: "chili",
            },
            {
              value: "21.4%",
              label: "Beverage & Cellar COGS",
              sub: "Craft Draught, Natural Wine & Softs",
              trend: "1.6% Below Budget",
              trendType: "up",
              icon: "bi-cup-straw",
              color: "basil",
            },
            {
              value: "£3,480.00",
              label: "Pending Supplier Invoices",
              sub: "Awaiting manager goods-received sign-off",
              trend: "2 Due Tomorrow",
              trendType: "gold",
              icon: "bi-file-earmark-spreadsheet-fill",
              color: "mustard",
            },
          ],
          tableTitle: "Supplier Purchase Orders & Receiving Log",
          tableSub:
            "All incoming food, beverage, and packaging deliveries for 24 Covent Garden Piazza.",
          tableHeaders: [
            "PO Number",
            "Purveyor / Supplier",
            "Order Category",
            "Delivery Slot",
            "Invoice Total",
            "Order Status",
            "Manager Action",
          ],
          tableRows: [
            [
              "PO-2026-891",
              "HG Walter Butchers (London)",
              "45-Day Hereford & Wagyu Primals",
              "Tomorrow · 06:30 AM",
              "£1,420.00",
              { text: "Dispatched", type: "basil" },
              "Approve GRN",
            ],
            [
              "PO-2026-892",
              "Natoora Covent Garden Market",
              "San Marzano DOP, Basil, Truffles",
              "Tomorrow · 07:00 AM",
              "£685.50",
              { text: "Dispatched", type: "basil" },
              "Approve GRN",
            ],
            [
              "PO-2026-893",
              "Kernel Brewery (Bermondsey)",
              "8× Craft Pale Ale & Table Beer Kegs",
              "Tomorrow · 08:15 AM",
              "£790.00",
              { text: "Awaiting Sign-Off", type: "mustard" },
              "Authorize PO",
            ],
            [
              "PO-2026-894",
              "Stackly Eco-Pack UK",
              "Vented Burger Boxes & Thermal Seals",
              "24 Oct · 09:00 AM",
              "£584.50",
              { text: "Scheduled", type: "ink" },
              "View Manifest",
            ],
          ],
          cardsTitle: "Cellar & Bar Stock Highlights",
          cardsEyebrow: "Beverage Operations",
          cards: [
            {
              img: IMG.cat4,
              tag: "12 Lines Active",
              title: "Bermondsey Craft Draught Cellar",
              desc: "Glycol line chillers holding at 3.2°C. Line cleaning completed Tuesday morning; zero fobbing waste.",
              meta: [
                ["Keg Yield", "98.6% Pint Yield"],
                ["Top Pour", "Stackly House Pale"],
              ],
              highlight: "Optimal Pour",
              btnText: "Cellar Audit",
            },
            {
              img: IMG.cat6,
              tag: "420 Bottles",
              title: "Italian Natural & Classic Wine Vault",
              desc: "Curated list of Piedmont Nebbiolo, Tuscan Chianti Classico, and Sicilian Etna Rosso stored at 13°C.",
              meta: [
                ["Valuation", "£11,240"],
                ["Sommelier Lead", "Hannah S."],
              ],
              highlight: "100% Balanced",
              btnText: "Wine Stocktake",
            },
            {
              img: IMG.cat1,
              tag: "100% Compostable",
              title: "Express Delivery Packaging Stock",
              desc: "Foil-lined Kraft burger clamshells, double-wall corrugated 12-inch pizza boxes, and tamper-evident stickers.",
              meta: [
                ["Days of Cover", "14 Days Stock"],
                ["Reorder Point", "5 Days"],
              ],
              highlight: "4,200 Boxes",
              btnText: "Order Packaging",
            },
          ],
        },
        {
          id: "mgr-feedback",
          navTitle: "Guest Feedback & Comps",
          icon: "bi-chat-heart-fill",
          badge: "4.94 ★",
          eyebrow: "Voice Of The Diner",
          heading: "Verified Guest Reviews, Hospitality Comps & Audits",
          description:
            "Review real-time post-meal ratings, respond to diner notes, and audit goodwill table comps.",
          primaryBtn: "Export Review Report",
          kpis: [
            {
              value: "4.94 / 5.0",
              label: "30-Day Rolling Guest Score",
              sub: "Across 1,240 verified diners",
              trend: "#1 in Covent Garden",
              trendType: "up",
              icon: "bi-star-fill",
              color: "mustard",
            },
            {
              value: "96.8%",
              label: "Would Recommend Stackly",
              sub: "Net Promoter Score (NPS): +84",
              trend: "+4 pts vs Sept",
              trendType: "up",
              icon: "bi-hand-thumbs-up-fill",
              color: "basil",
            },
            {
              value: "£42.00",
              label: "Today's Goodwill Comp Spend",
              sub: "0.5% of sales (Allowance: 1.5%)",
              trend: "Well Under Budget",
              trendType: "up",
              icon: "bi-gift",
              color: "chili",
            },
          ],
          tableTitle: "Today's Verified Diner Feedback & Comp Log",
          tableSub:
            "Direct table QR feedback and delivery app ratings with server attribution.",
          tableHeaders: [
            "Review Ref",
            "Diner & Table/Zone",
            "Dishes Rated",
            "Score",
            "Guest Comment",
            "Server / Rider",
            "Resolution",
            "Follow-Up",
          ],
          tableRows: [
            [
              "#REV-701",
              "Arthur P. · Booth #04",
              "Black Truffle Wagyu Smash & Diavola",
              "5.0 ★",
              "Best burger sear in London and sourdough crust was perfection!",
              "Clara Vance",
              { text: "Thanked + 100 pts", type: "basil" },
              "View Note",
            ],
            [
              "#REV-702",
              "Elena M. · Counter #02",
              "Chef's 5-Course Wood-Fired Tasting",
              "5.0 ★",
              "Watching Luca stretch the dough and Marco sear the Wagyu was theatre.",
              "Oliver Grant",
              { text: "Published on Site", type: "basil" },
              "View Note",
            ],
            [
              "#REV-703",
              "David K. · Terrace #06",
              "Nduja Pizza & Craft Pale Ale",
              "4.5 ★",
              "Food incredible; terrace heater took 5 mins to warm up—server comped coffee.",
              "Samir Patel",
              { text: "£7.50 Coffee Comp", type: "mustard" },
              "Review Comp",
            ],
            [
              "#REV-704",
              "Chloe W. · Delivery WC2E",
              "Buttermilk Chicken Feast Box",
              "5.0 ★",
              "Arrived piping hot in 15 minutes! Fries were still super crispy.",
              "Rider Liam O.",
              { text: "£5 Tip Added", type: "basil" },
              "View Note",
            ],
          ],
          cardsTitle: "Hospitality Standards & Mystery Diner Audits",
          cardsEyebrow: "Quality Assurance",
          cards: [
            {
              img: IMG.heroBurger,
              tag: "98 / 100 Score",
              title: "October Mystery Diner Audit",
              desc: "Independent hospitality inspection scored 98% for warm welcome, drink speed (3m 10s), and Wagyu burger temperature.",
              meta: [
                ["Greeting Time", "Under 30 Secs"],
                ["Food Accuracy", "100%"],
              ],
              highlight: "Distinction",
              btnText: "Read Full Audit",
            },
            {
              img: IMG.fav2,
              tag: "Goodwill Policy",
              title: "Instant Comp Empowerment",
              desc: "Senior servers are empowered to comp up to £25 (e.g., gelato shake or starter) immediately to delight any guest.",
              meta: [
                ["Daily Cap", "£125.00"],
                ["Used Today", "£42.00"],
              ],
              highlight: "£83 Remaining",
              btnText: "Comp Log",
            },
            {
              img: IMG.about1,
              tag: "18,400+ Reviews",
              title: "Google & TripAdvisor Reputation",
              desc: "4.9★ rating across 18k+ London diners. Automated thank-you emails with 200 Flame Points sent for 5-star reviews.",
              meta: [
                ["This Week", "+142 New 5★"],
                ["Response Rate", "100%"],
              ],
              highlight: "4.9★ Average",
              btnText: "Manage Replies",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // ROLE 4: DELIVERY PARTNER
    // =========================================================================
    delivery: {
      roleKey: "delivery",
      roleLabel: "Delivery Partner",
      badgeIcon: "bi-bicycle",
      portalTitle: "Stackly Express Fleet & Thermal Courier Hub",
      portalSubtitle:
        "Manage live West End drops, Covent Garden pickup pass codes, thermal bag telemetry & instant rider earnings.",
      kitchenNote: "Fleet Status: West End Surge +£2.50/Drop · E-Bike #14",
      sections: [
        {
          id: "del-overview",
          navTitle: "Dispatch & Active Route",
          icon: "bi-geo-alt-fill",
          badge: "3 Drops",
          eyebrow: "Express Fleet Command",
          heading: "Live Assigned Delivery Queue & West End Route",
          description:
            "Optimised multi-drop routing from 24 Covent Garden Piazza across WC2, Soho W1D, Fitzrovia, and Holborn.",
          primaryBtn: "Scan Next Pickup",
          kpis: [
            {
              value: "3 Active",
              label: "Orders In Thermal Bag",
              sub: "1 Delivering Now · 2 Ready at Pass",
              trend: "Route Optimised",
              trendType: "hot",
              icon: "bi-box-seam-fill",
              color: "chili",
            },
            {
              value: "19 Drops",
              label: "Completed Today",
              sub: "100% On-Time · Zero Spills",
              trend: "Top 3 Fleet Rider",
              trendType: "up",
              icon: "bi-check-circle-fill",
              color: "basil",
            },
            {
              value: "16m 40s",
              label: "Average Door-to-Door Time",
              sub: "Target SLA: Under 20m 00s",
              trend: "+£15 Speed Bonus",
              trendType: "up",
              icon: "bi-stopwatch-fill",
              color: "mustard",
            },
            {
              value: "£148.60",
              label: "Today's Running Earnings",
              sub: "Includes £38.50 in 100% Customer Tips",
              trend: "Instant Cashout",
              trendType: "gold",
              icon: "bi-wallet2",
              color: "ink",
            },
          ],
          tableTitle: "Live Assigned Delivery Manifest",
          tableSub:
            "Active and queued West End drops with customer buzzer codes and payout breakdown.",
          tableHeaders: [
            "Order ID",
            "Customer & Postcode",
            "Thermal Bag Contents",
            "Distance",
            "Target ETA",
            "Fee + Tip",
            "Route Status",
            "Rider Action",
          ],
          tableRows: [
            [
              "#STK-8942",
              "Arthur P. · 14 Floral St, WC2E 9DH",
              '2× Wagyu Burgers, 1× 12" Diavola, 1× Fries',
              "0.4 mi",
              "12:22 PM (4m)",
              "£6.80 + £4.00 Tip",
              { text: "En Route · Drop #1", type: "chili" },
              "Mark Delivered",
            ],
            [
              "#STK-8945",
              "Chloe W. · 22 Wardour St, Soho W1D",
              "1× Buttermilk Chicken Box, 2× Gelato Shakes",
              "0.7 mi",
              "12:31 PM (13m)",
              "£7.20 + £3.50 Tip",
              { text: "In Thermal Bag #2", type: "mustard" },
              "Navigate Next",
            ],
            [
              "#STK-8949",
              "Julian H. · 88 Kingsway, Holborn WC2B",
              "3× Neapolitan Sourdough Pizzas, 2× Dips",
              "0.6 mi",
              "12:42 PM (24m)",
              "£7.50 + £5.00 Tip",
              { text: "Ready at Kitchen Pass", type: "basil" },
              "Scan & Collect",
            ],
            [
              "#STK-8931",
              "Maya Lin · 19 Bedford Sq, WC1B",
              "2× Truffle Wagyu Smash, 1× Corn Ribs",
              "0.9 mi",
              "Delivered 11:52",
              "£6.50 + £3.00 Tip",
              { text: "Completed (15m)", type: "ink" },
              "View Proof",
            ],
          ],
          cardsTitle: "Active Turn-By-Turn Drop Cards",
          cardsEyebrow: "Live GPS Telemetry",
          cards: [
            {
              img: IMG.heroBurger,
              tag: "Drop #1 · 0.4 Miles",
              title: "14 Floral Street, Covent Garden",
              desc: "Take Garrick St cycle lane -> Right onto Floral St. Customer note: Ring Buzzer #4B, lift to 2nd floor.",
              meta: [
                ["Pin Code", "Verified #8942"],
                ["Bag Temp", "68.4°C Optimal"],
              ],
              highlight: "ETA 4 Mins",
              btnText: "Confirm Handover",
            },
            {
              img: IMG.fav3,
              tag: "Drop #2 · 0.7 Miles",
              title: "22 Wardour Street, Soho W1D",
              desc: "Cross Shaftesbury Ave -> Wardour St studio reception. Separate cold pouch for 2× Pistachio Gelato Shakes.",
              meta: [
                ["Cold Pouch", "-12°C Ice Pack"],
                ["Reception", "Ground Floor Desk"],
              ],
              highlight: "ETA 13 Mins",
              btnText: "Open Map",
            },
            {
              img: IMG.fav2,
              tag: "Return Pass · 0.5 Miles",
              title: "24 Covent Garden Kitchen Pass",
              desc: "Order #STK-8949 (3× Pizzas) is coming out of Brick Oven #1 now. Dedicated rider bay #2 reserved outside.",
              meta: [
                ["Pass Code", "PICK-49"],
                ["Wait Time", "0 Mins (Ready)"],
              ],
              highlight: "Ready at Pass",
              btnText: "Scan Pass QR",
            },
          ],
        },
        {
          id: "del-pickups",
          navTitle: "Pickup Pass & Thermal Bags",
          icon: "bi-thermometer-high",
          badge: "68°C Hot",
          eyebrow: "Quality In Transit",
          heading: "Kitchen Pass Handover & Thermal Bag Telemetry",
          description:
            "Ensure every Wagyu burger arrives with crispy fries and every Neapolitan pizza stays level at 68°C.",
          primaryBtn: "Pair Bag Sensor",
          kpis: [
            {
              value: "68.4°C",
              label: "Heated Pizza Rack Temp",
              sub: "Inductive 12V warming plate active",
              trend: "Oven-Fresh Heat",
              trendType: "hot",
              icon: "bi-fire",
              color: "chili",
            },
            {
              value: "-12.0°C",
              label: "Isolated Gelato Compartment",
              sub: "Zero melt guarantee for 35 mins",
              trend: "Sealed Cold",
              trendType: "up",
              icon: "bi-snow",
              color: "basil",
            },
            {
              value: "100% Sealed",
              label: "Tamper-Evident Security",
              sub: "Every bag double-sealed at kitchen pass",
              trend: "Zero Claims",
              trendType: "gold",
              icon: "bi-shield-lock-fill",
              color: "mustard",
            },
          ],
          tableTitle: "Kitchen Pass Handover & Seal Verification Log",
          tableSub:
            "Every order scanned at the Covent Garden dispatch hatch before loading.",
          tableHeaders: [
            "Handover ID",
            "Order Ref",
            "Hot Crates",
            "Cold Items",
            "Tamper Seal #",
            "Bag Core Temp",
            "Handover Status",
            "Action",
          ],
          tableRows: [
            [
              "HND-501",
              "#STK-8942",
              '1× Burger Box, 1× 12" Pizza Box',
              "None",
              "SEAL-99412",
              "68.4°C",
              { text: "Loaded & Locked", type: "basil" },
              "Verify Seal",
            ],
            [
              "HND-502",
              "#STK-8945",
              "1× Fried Chicken Box",
              "2× Gelato Shakes (Pouch B)",
              "SEAL-99418",
              "66.9°C / -12°C",
              { text: "Loaded & Locked", type: "basil" },
              "Verify Seal",
            ],
            [
              "HND-503",
              "#STK-8949",
              '3× 12" Sourdough Pizza Boxes',
              "2× Garlic Aioli Tubs",
              "SEAL-99425",
              "71.0°C At Pass",
              { text: "Waiting Scan", type: "mustard" },
              "Scan QR",
            ],
          ],
          cardsTitle: "Stackly Gold-Standard Transit Protocols",
          cardsEyebrow: "Zero-Soggy Guarantee",
          cards: [
            {
              img: IMG.cat1,
              tag: "Steam Venting",
              title: "Wagyu Smash & Fries Separation",
              desc: "Rosemary skin-on fries travel in perforated breather cartons above the burger box so steam escapes without softening the crust.",
              meta: [
                ["Crisp Retention", "96% After 20m"],
                ["Vent Check", "Mandatory"],
              ],
              highlight: "Crisp Verified",
              btnText: "View Guide",
            },
            {
              img: IMG.cat2,
              tag: "Gyro Level Rack",
              title: "Flat-Lock Neapolitan Pizza Cradle",
              desc: "Suspended horizontal pizza rack prevents Puglia burrata and San Marzano toppings from sliding during cornering.",
              meta: [
                ["Capacity", 'Up to 5× 12" Boxes'],
                ["Tilt Sensor", "0° Level"],
              ],
              highlight: "Level Locked",
              btnText: "Calibrate Rack",
            },
            {
              img: IMG.cat4,
              tag: "Doorstep Protocol",
              title: "VIP Handover & Photo Confirmation",
              desc: "Greet diners by name, hand over hot boxes first, and capture doorstep photo only if 'Leave at Door' is selected.",
              meta: [
                ["Rider Rating", "4.98 ★ (Liam O.)"],
                ["Compliments", "142 Badges"],
              ],
              highlight: "4.98 ★ Rated",
              btnText: "View Badges",
            },
          ],
        },
        {
          id: "del-zones",
          navTitle: "London Delivery Zones",
          icon: "bi-map-fill",
          badge: "Surge +£2.50",
          eyebrow: "Central London Coverage",
          heading: "Postcode Demand Matrix & Surge Multipliers",
          description:
            "Live order heatmaps across Covent Garden, Soho, Mayfair, Fitzrovia, Bloomsbury, and South Bank.",
          primaryBtn: "Switch Active Zone",
          kpis: [
            {
              value: "+£2.50 / Drop",
              label: "Active Peak Surge Boost",
              sub: "WC2E Covent Garden & W1D Soho",
              trend: "High Lunch/Dinner Demand",
              trendType: "hot",
              icon: "bi-lightning-fill",
              color: "chili",
            },
            {
              value: "1.8 Miles",
              label: "Max Kitchen Delivery Radius",
              sub: "Strict geofence to protect food quality",
              trend: "Fast Round-Trips",
              trendType: "up",
              icon: "bi-compass-fill",
              color: "basil",
            },
            {
              value: "Clear Cycle",
              label: "West End Cycle Lane Status",
              sub: "Strand & Shaftesbury lanes clear",
              trend: "Avg 16 mph",
              trendType: "gold",
              icon: "bi-sign-turn-right-fill",
              color: "mustard",
            },
          ],
          tableTitle: "Central London Postcode Zone Surge & Wait Matrix",
          tableSub:
            "Real-time order volume and rider per-drop bonuses by London district.",
          tableHeaders: [
            "Zone ID",
            "London District & Postcodes",
            "Live Order Volume",
            "Surge Bonus",
            "Avg Round-Trip",
            "Zone Status",
            "Queue Action",
          ],
          tableRows: [
            [
              "ZONE-01",
              "Covent Garden & Strand (WC2E, WC2N)",
              "28 Orders / Hr",
              "+£2.50 / Drop",
              "14 Mins",
              { text: "Peak Demand", type: "chili" },
              "Active Zone",
            ],
            [
              "ZONE-02",
              "Soho & Chinatown (W1D, W1F)",
              "24 Orders / Hr",
              "+£2.50 / Drop",
              "17 Mins",
              { text: "Peak Demand", type: "chili" },
              "Active Zone",
            ],
            [
              "ZONE-03",
              "Holborn, Lincoln's Inn & Bloomsbury (WC1, WC2B)",
              "16 Orders / Hr",
              "+£1.75 / Drop",
              "19 Mins",
              { text: "High Demand", type: "mustard" },
              "Join Zone",
            ],
            [
              "ZONE-04",
              "Mayfair & Fitzrovia East (W1J, W1T)",
              "12 Orders / Hr",
              "+£3.00 / Drop",
              "22 Mins",
              { text: "VIP High-Tip Zone", type: "basil" },
              "Join Zone",
            ],
          ],
          cardsTitle: "Covent Garden Rider Hub Amenities",
          cardsEyebrow: "24 Piazza Fleet Base",
          cards: [
            {
              img: IMG.about1,
              tag: "Bay #1–#6",
              title: "Dedicated Heated Rider Lounge",
              desc: "Private rear courtyard access on Floral Street with complimentary barista espresso, hydration station, and hot staff meals.",
              meta: [
                ["Free Shift Meal", "1 Burger/Pizza per Shift"],
                ["Access Code", "4024#"],
              ],
              highlight: "Open 10:00–23:30",
              btnText: "Claim Shift Meal",
            },
            {
              img: IMG.about2,
              tag: "30-Sec Swap",
              title: "Bosch E-Cargo Battery Swap Cabinet",
              desc: "Swap depleted e-bike batteries for 100% charged packs in 30 seconds at our Covent Garden courtyard dock.",
              meta: [
                ["Charged Packs Ready", "11 Packs at 100%"],
                ["Range per Pack", "55 Miles"],
              ],
              highlight: "11 Ready",
              btnText: "Reserve Pack",
            },
            {
              img: IMG.chef,
              tag: "All-Weather",
              title: "Gore-Tex Wet Weather Gear Locker",
              desc: "High-visibility Stackly thermal jackets, waterproof over-trousers, and anti-fog visor helmets available for all riders.",
              meta: [
                ["Dryers", "Heated Rack Active"],
                ["Safety Spec", "EN ISO 20471"],
              ],
              highlight: "Complimentary",
              btnText: "Request Gear",
            },
          ],
        },
        {
          id: "del-earnings",
          navTitle: "Earnings, Tips & Payouts",
          icon: "bi-cash-coin",
          badge: "£742.80",
          eyebrow: "Rider Settlement Ledger",
          heading: "Weekly Earnings, 100% Customer Tips & Bonus Tiers",
          description:
            "Transparent breakdown of base drop fees, mileage, peak surge multipliers, and 100% direct customer tips.",
          primaryBtn: "Instant Bank Cashout",
          kpis: [
            {
              value: "£742.80",
              label: "Current Week Net Earnings",
              sub: "94 Drops Completed (Mon–Fri)",
              trend: "+£118 vs Last Week",
              trendType: "up",
              icon: "bi-currency-pound",
              color: "basil",
            },
            {
              value: "£164.50",
              label: "100% Direct Customer Tips",
              sub: "Zero platform commission deducted",
              trend: "£1.75 Avg Tip/Drop",
              trendType: "up",
              icon: "bi-heart-fill",
              color: "chili",
            },
            {
              value: "£45.00",
              label: "Gold Fleet Speed Bonus",
              sub: "Unlocked for 90+ drops under 18 mins",
              trend: "Bonus Unlocked",
              trendType: "gold",
              icon: "bi-trophy-fill",
              color: "mustard",
            },
          ],
          tableTitle: "Daily Shift Earnings & Tip Statement",
          tableSub:
            "Settled directly to your linked UK Faster Payments bank account.",
          tableHeaders: [
            "Statement ID",
            "Shift Date",
            "Completed Drops",
            "Base + Mileage",
            "Surge & Bonus",
            "Customer Tips",
            "Total Payout",
            "Payout Status",
            "Payslip",
          ],
          tableRows: [
            [
              "PAY-1022",
              "Today (Live Shift)",
              "19 Drops",
              "£82.60",
              "£27.50",
              "£38.50",
              "£148.60",
              { text: "Accruing Live", type: "mustard" },
              "Cashout Now",
            ],
            [
              "PAY-1021",
              "Thu, 21 Oct 2026",
              "22 Drops",
              "£96.80",
              "£35.00",
              "£41.00",
              "£172.80",
              { text: "Paid to Bank", type: "basil" },
              "Download PDF",
            ],
            [
              "PAY-1020",
              "Wed, 20 Oct 2026",
              "18 Drops",
              "£79.20",
              "£22.50",
              "£29.50",
              "£131.20",
              { text: "Paid to Bank", type: "basil" },
              "Download PDF",
            ],
            [
              "PAY-1019",
              "Tue, 19 Oct 2026",
              "20 Drops",
              "£88.00",
              "£28.00",
              "£34.00",
              "£150.00",
              { text: "Paid to Bank", type: "basil" },
              "Download PDF",
            ],
          ],
          cardsTitle: "Active Weekend Fleet Challenges",
          cardsEyebrow: "Boost Your Payout",
          cards: [
            {
              img: IMG.fav1,
              tag: "+£60 Bonus",
              title: "Friday–Sunday Dinner Rush Quest",
              desc: "Complete 35 deliveries between 18:00 and 22:30 across Friday, Saturday, and Sunday to unlock an automatic £60 bonus.",
              meta: [
                ["Your Progress", "7 / 35 Completed"],
                ["Time Left", "2 Days 11 Hrs"],
              ],
              highlight: "£60 Reward",
              btnText: "Track Quest",
            },
            {
              img: IMG.fav2,
              tag: "+£25 Bonus",
              title: "Zero-Tilt Pizza Master Badge",
              desc: "Maintain 100% 5-star packaging ratings on 25 consecutive sourdough pizza deliveries.",
              meta: [
                ["Your Streak", "21 / 25 Pizzas"],
                ["Rating", "5.0 ★ Perfect"],
              ],
              highlight: "4 Pizzas Away",
              btnText: "View Streak",
            },
            {
              img: IMG.cat5,
              tag: "Zero Fees",
              title: "Instant Faster Payments Cashout",
              desc: "Transfer your accrued shift earnings and customer tips to your Monzo, Barclays, or Revolut account in 10 seconds.",
              meta: [
                ["Available Now", "£148.60"],
                ["Transfer Fee", "£0.00 (Free)"],
              ],
              highlight: "£148.60 Ready",
              btnText: "Withdraw £148.60",
            },
          ],
        },
        {
          id: "del-vehicle",
          navTitle: "Vehicle & Safety Check",
          icon: "bi-shield-check",
          badge: "86% Batt",
          eyebrow: "Fleet Telemetry",
          heading: "E-Cargo Bike Diagnostics, Hygiene & Insurance",
          description:
            "Pre-shift brake and tyre checks, battery range telemetry, and food courier insurance verification.",
          primaryBtn: "Submit Safety Check",
          kpis: [
            {
              value: "86% (48 mi)",
              label: "E-Bike #14 Battery Charge",
              sub: "Dual Bosch PowerTube 1000Wh",
              trend: "Covers Full Shift",
              trendType: "up",
              icon: "bi-battery-charging",
              color: "basil",
            },
            {
              value: "Verified",
              label: "Commercial Courier Cover",
              sub: "Policy #STK-FLT-908 · Fully Comp",
              trend: "Active Thru 2027",
              trendType: "up",
              icon: "bi-file-earmark-check-fill",
              color: "chili",
            },
            {
              value: "Sanitised",
              label: "Thermal Bag Hygiene Log",
              sub: "Food-safe antibacterial wipe at 11:00",
              trend: "EHO Compliant",
              trendType: "gold",
              icon: "bi-stars",
              color: "mustard",
            },
          ],
          tableTitle: "E-Cargo Bike #14 Maintenance & Inspection Log",
          tableSub:
            "Daily mechanical and food-hygiene checks logged at the Covent Garden fleet hub.",
          tableHeaders: [
            "Check Ref",
            "Component / System",
            "Telemetry / Metric",
            "Last Inspected",
            "Next Service",
            "Safety Status",
            "Action",
          ],
          tableRows: [
            [
              "CHK-01",
              "Hydraulic Disc Brakes (Front & Rear)",
              "Pad Thickness: 4.2mm",
              "Today · 10:45 AM",
              "In 650 Miles",
              { text: "Passed Safe", type: "basil" },
              "Log Check",
            ],
            [
              "CHK-02",
              "Schwalbe Puncture-Guard Cargo Tyres",
              "55 PSI Front / 60 PSI Rear",
              "Today · 10:45 AM",
              "Weekly Check",
              { text: "Passed Safe", type: "basil" },
              "Log Check",
            ],
            [
              "CHK-03",
              "12V Heated Thermal Rack Wiring",
              "68.4°C Steady Output",
              "Today · 10:50 AM",
              "Monthly Audit",
              { text: "Passed Safe", type: "basil" },
              "Log Check",
            ],
            [
              "CHK-04",
              "Daytime Running LED & Brake Beacons",
              "800 Lumens High-Vis",
              "Today · 10:50 AM",
              "Daily Check",
              { text: "Passed Safe", type: "basil" },
              "Log Check",
            ],
          ],
          cardsTitle: "Rider Support & Emergency Assistance",
          cardsEyebrow: "24/7 Fleet Care",
          cards: [
            {
              img: IMG.about1,
              tag: "Direct Line",
              title: "Covent Garden Kitchen Dispatch Desk",
              desc: "One-tap priority call to the kitchen pass coordinator if a customer buzzer is unresponsive or an address pin needs clarification.",
              meta: [
                ["Avg Answer Time", "4 Seconds"],
                ["Coordinator", "Samir P."],
              ],
              highlight: "Live Support",
              btnText: "Call Pass Desk",
            },
            {
              img: IMG.about2,
              tag: "15-Min Rescue",
              title: "Mobile E-Bike Mechanic Van",
              desc: "Instant replacement e-cargo bike delivered to your West End location within 15 minutes in case of a puncture or fault.",
              meta: [
                ["Coverage Zone", "All Zone 1"],
                ["Rider Cost", "£0.00 Covered"],
              ],
              highlight: "On Standby",
              btnText: "Request Van",
            },
            {
              img: IMG.chef,
              tag: "FSA Level 2",
              title: "Courier Food Safety Certificate",
              desc: "Your Level 2 Food Safety in Transit & Allergen Separation certificate is verified and active on your rider profile.",
              meta: [
                ["Cert ID", "#FSA-UK-8841"],
                ["Renewal Due", "Oct 2028"],
              ],
              highlight: "Accredited",
              btnText: "View Certificate",
            },
          ],
        },
      ],
    },

    // =========================================================================
    // ROLE 5: ADMIN / OWNER
    // =========================================================================
    admin: {
      roleKey: "admin",
      roleLabel: "Admin / Owner",
      badgeIcon: "bi-shield-lock-fill",
      portalTitle: "Stackly Executive & Multi-Role Ownership Suite",
      portalSubtitle:
        "Full-spectrum P&L analytics, menu engineering, role access governance, tax ledger & flagship restaurant controls.",
      kitchenNote: "Flagship Health: £248.9k MTD Revenue · 24.8% Net EBITDA",
      sections: [
        {
          id: "adm-overview",
          navTitle: "Executive Overview",
          icon: "bi-bar-chart-line-fill",
          badge: "£248.9k",
          eyebrow: "Ownership Command",
          heading: "Flagship Financial Performance & Multi-Channel KPIs",
          description:
            "Consolidated revenue, prime cost ratios, dine-in vs delivery mix, and customer acquisition across 24 Covent Garden Piazza.",
          primaryBtn: "Download Board Report",
          kpis: [
            {
              value: "£248,920",
              label: "Month-To-Date Gross Revenue",
              sub: "62% Dine-In · 38% Express Delivery",
              trend: "+18.4% YoY",
              trendType: "up",
              icon: "bi-graph-up-arrow",
              color: "chili",
            },
            {
              value: "24.8%",
              label: "Net Operating EBITDA Margin",
              sub: "£61,732 Net Operating Profit MTD",
              trend: "+3.2% vs Target",
              trendType: "up",
              icon: "bi-pie-chart-fill",
              color: "basil",
            },
            {
              value: "53.4%",
              label: "Prime Cost (COGS + Labour)",
              sub: "25.2% Food/Bev · 28.2% Total Labour",
              trend: "Industry Benchmark <58%",
              trendType: "gold",
              icon: "bi-Calculator-fill bi-calculator-fill",
              color: "mustard",
            },
            {
              value: "18,420",
              label: "Registered Portal Members",
              sub: "68% 90-Day Repeat Dining Rate",
              trend: "+1,140 This Month",
              trendType: "up",
              icon: "bi-people-fill",
              color: "ink",
            },
          ],
          tableTitle: "Departmental Revenue & Profitability Matrix (MTD)",
          tableSub:
            "Financial contribution across all five operational pillars of Stackly Food & Restaurant.",
          tableHeaders: [
            "Revenue Stream",
            "Monthly Volume",
            "Gross Sales",
            "COGS %",
            "Direct Labour %",
            "Net Contribution",
            "Performance",
            "Audit",
          ],
          tableRows: [
            [
              "Main Dining Room & Booths",
              "9,120 Covers",
              "£132,450",
              "24.8%",
              "27.5%",
              "£63,178 (47.7%)",
              { text: "Exceeding Plan", type: "basil" },
              "Drill Down",
            ],
            [
              "Express Thermal Fleet Delivery",
              "4,860 Orders",
              "£84,120",
              "26.1%",
              "24.0%",
              "£41,975 (49.9%)",
              { text: "Fastest Growing", type: "chili" },
              "Drill Down",
            ],
            [
              "Chef's Counter & Vault Tastings",
              "700 Covers",
              "£32,350",
              "23.0%",
              "25.5%",
              "£16,660 (51.5%)",
              { text: "Highest Margin", type: "mustard" },
              "Drill Down",
            ],
            [
              "Artisan Retail Sauces & Merch",
              "640 Units",
              "£6,400",
              "19.5%",
              "8.0%",
              "£4,640 (72.5%)",
              { text: "New Channel", type: "basil" },
              "Drill Down",
            ],
          ],
          cardsTitle: "Executive Strategic Growth Pillars",
          cardsEyebrow: "Q4 2026 Ownership Roadmap",
          cards: [
            {
              img: IMG.about1,
              tag: "Site #2 Expansion",
              title: "Soho & Borough Market Lease Pipeline",
              desc: "Heads of terms under review for a 3,200 sq ft second wood-fired kitchen site in Borough Market with 85 covers.",
              meta: [
                ["Projected ROI", "38% Year 1"],
                ["Target Launch", "Q2 2027"],
              ],
              highlight: "Stage 3 Legal",
              btnText: "View Deal Deck",
            },
            {
              img: IMG.heroBurger,
              tag: "Direct Ordering",
              title: "Zero-Commission Direct Web Portal",
              desc: "82% of our delivery orders now come directly through Stackly's own member portal, saving £14,200/month in third-party app fees.",
              meta: [
                ["Direct Share", "82% of Orders"],
                ["Monthly Saving", "£14,200"],
              ],
              highlight: "+£170k/Yr Saved",
              btnText: "Channel Analytics",
            },
            {
              img: IMG.about2,
              tag: "Sustainability",
              title: "100% British Regenerative Farming",
              desc: "Direct farm contracts locked for 2027 with Somerset Hereford herds and Kentish heritage wheat mills at fixed pricing.",
              meta: [
                ["Price Hedge", "Locked 12 Months"],
                ["Carbon Offset", "Certified Net-0"],
              ],
              highlight: "Hedge Locked",
              btnText: "View Contracts",
            },
          ],
        },
        {
          id: "adm-menu",
          navTitle: "Menu & Pricing Control",
          icon: "bi-tags-fill",
          badge: "64 SKUs",
          eyebrow: "Menu Engineering",
          heading: "Master Menu Pricing, Dish Margins & Sales Velocity",
          description:
            "Control live selling prices across dine-in and delivery, analyse star dishes, and adjust combo bundles.",
          primaryBtn: "Publish Price Update",
          kpis: [
            {
              value: "£42,840",
              label: "Top Revenue Dish (MTD)",
              sub: "Black Truffle Aged Wagyu Smash (2,266 Sold)",
              trend: "75.4% Gross Margin",
              trendType: "up",
              icon: "bi-fire",
              color: "chili",
            },
            {
              value: "£34.50",
              label: "Blended Average Order Value",
              sub: "Up from £31.20 after bundle launch",
              trend: "+10.5% AOV Lift",
              trendType: "up",
              icon: "bi-bag-plus-fill",
              color: "basil",
            },
            {
              value: "78.3%",
              label: "Sourdough Pizza Category Margin",
              sub: "48-hr dough + DOP toppings",
              trend: "Highest Profit Line",
              trendType: "gold",
              icon: "bi-cash-stack",
              color: "mustard",
            },
          ],
          tableTitle: "Master Menu SKU Profitability & Volume Ledger",
          tableSub:
            "Live POS pricing, plate cost, contribution margin, and 30-day sales volume.",
          tableHeaders: [
            "SKU Code",
            "Menu Item Name",
            "Category",
            "Menu Price",
            "Plate COGS",
            "Gross Margin",
            "30-Day Sold",
            "Tier Status",
            "Pricing Control",
          ],
          tableRows: [
            [
              "SKU-W01",
              "Black Truffle Aged Wagyu Smash",
              "Wagyu Burgers",
              "£18.90",
              "£4.65",
              "£14.25 (75.4%)",
              "2,266 Sold",
              { text: "Signature Star", type: "chili" },
              "Edit Price",
            ],
            [
              "SKU-P02",
              "48-Hr Diavola & Calabrian Honey",
              "Wood-Fired Pizza",
              "£17.50",
              "£3.80",
              "£13.70 (78.3%)",
              "1,940 Sold",
              { text: "Signature Star", type: "basil" },
              "Edit Price",
            ],
            [
              "SKU-C01",
              "Buttermilk Fried Chicken Brioche",
              "Poultry Burgers",
              "£16.50",
              "£4.10",
              "£12.40 (75.1%)",
              "1,510 Sold",
              { text: "High Volume", type: "basil" },
              "Edit Price",
            ],
            [
              "SKU-F01",
              "Rosemary & Truffle Parmesan Fries",
              "Artisan Sides",
              "£6.50",
              "£1.15",
              "£5.35 (82.3%)",
              "3,890 Sold",
              { text: "Top Upsell", type: "mustard" },
              "Edit Price",
            ],
            [
              "SKU-G03",
              "Bronte Pistachio Gelato Shake",
              "Cold Bar & Shakes",
              "£9.50",
              "£2.10",
              "£7.40 (77.9%)",
              "1,420 Sold",
              { text: "High Margin", type: "basil" },
              "Edit Price",
            ],
          ],
          cardsTitle: "Dynamic Menu Engineering Controls",
          cardsEyebrow: "POS & Web Sync",
          cards: [
            {
              img: IMG.fav1,
              tag: "+£4.80 AOV",
              title: "Checkout Side & Shake Upsell Prompt",
              desc: "Smart cart drawer recommendation pairing Rosemary Truffle Fries and Pistachio Shakes with every solo burger order.",
              meta: [
                ["Conversion Rate", "41.8% of Carts"],
                ["Extra Revenue", "+£18,400/Mo"],
              ],
              highlight: "Active Rule",
              btnText: "Configure Rule",
            },
            {
              img: IMG.fav4,
              tag: "Bundle Engine",
              title: "Covent Garden Feast Bundles",
              desc: "Pre-configured 2-person and 4-person wood-fired feast bundles driving higher midweek Tuesday–Wednesday order sizes.",
              meta: [
                ["Midweek Lift", "+29% Orders"],
                ["Avg Bundle", "£44.00"],
              ],
              highlight: "4 Active Bundles",
              btnText: "Edit Bundles",
            },
            {
              img: IMG.cat3,
              tag: "Instant Sync",
              title: "86'd Item & Modifier Lockout",
              desc: "Instantly toggle availability across dine-in QR menus, website ordering, and kitchen KOT screens with zero latency.",
              meta: [
                ["Currently 86'd", "0 Dishes (100% Live)"],
                ["Sync Speed", "< 200ms"],
              ],
              highlight: "All 64 Live",
              btnText: "Manage Stockouts",
            },
          ],
        },
        {
          id: "adm-users",
          navTitle: "User & Role Access",
          icon: "bi-person-gear",
          badge: "5 Roles",
          eyebrow: "Identity & Security",
          heading: "Role-Based Access Control (RBAC) & Staff Directory",
          description:
            "Manage permissions across Customer, Head Chef, Restaurant Manager, Delivery Partner, and Admin accounts.",
          primaryBtn: "Provision Staff Account",
          kpis: [
            {
              value: "5 Roles",
              label: "Active RBAC Permission Tiers",
              sub: "Customer · Chef · Manager · Delivery · Admin",
              trend: "Strict Isolation",
              trendType: "up",
              icon: "bi-diagram-3-fill",
              color: "chili",
            },
            {
              value: "48 Staff",
              label: "Verified Internal Team Accounts",
              sub: "18 Kitchen · 16 FOH · 11 Fleet · 3 Exec",
              trend: "Strong PW Enforced",
              trendType: "up",
              icon: "bi-person-badge-fill",
              color: "basil",
            },
            {
              value: "18,372",
              label: "Registered Guest Diner Accounts",
              sub: "GDPR & UK Data Protection compliant",
              trend: "Zero Breaches",
              trendType: "gold",
              icon: "bi-shield-check",
              color: "mustard",
            },
          ],
          tableTitle: "Active Role Accounts & Security Audit Log",
          tableSub:
            "Recent portal authentications and role permission assignments.",
          tableHeaders: [
            "Account ID",
            "User / Email Address",
            "Assigned Role",
            "DepartmentScope",
            "Password Policy",
            "Session Status",
            "Access Control",
          ],
          tableRows: [
            [
              "USR-001",
              "owner.admin@stacklyfood.co.uk",
              "Admin / Owner",
              "Full Executive & P&L",
              "Strong (5/5 Rules)",
              { text: "Active Owner", type: "chili" },
              "Audit Logs",
            ],
            [
              "USR-014",
              "marco.chef@stacklyfood.co.uk",
              "Head Chef / Kitchen Staff",
              "KOT Pass, Prep & Larder",
              "Strong (5/5 Rules)",
              { text: "On Shift Pass", type: "basil" },
              "Edit Permissions",
            ],
            [
              "USR-022",
              "clara.manager@stacklyfood.co.uk",
              "Restaurant Manager",
              "Floor, Bookings & POs",
              "Strong (5/5 Rules)",
              { text: "On Floor Desk", type: "basil" },
              "Edit Permissions",
            ],
            [
              "USR-039",
              "liam.rider@stacklyfood.co.uk",
              "Delivery Partner",
              "West End Fleet & Drops",
              "Strong (5/5 Rules)",
              { text: "Active E-Bike #14", type: "mustard" },
              "Edit Permissions",
            ],
            [
              "USR-894",
              "arthur.diner@stacklyfood.co.uk",
              "Customer / Guest Diner",
              "Member Bookings & Rewards",
              "Strong (5/5 Rules)",
              { text: "Gold Member", type: "ink" },
              "View Profile",
            ],
          ],
          cardsTitle: "Authentication & Portal Security Policies",
          cardsEyebrow: "Enterprise Governance",
          cards: [
            {
              img: IMG.about1,
              tag: "5-Rule Enforcement",
              title: "Mandatory Strong Password Policy",
              desc: "All login and registration forms enforce 8+ characters, uppercase, lowercase, numeric, and special symbols before access.",
              meta: [
                ["Weak PW Blocked", "100% Enforced"],
                ["Live Strength Meter", "Active"],
              ],
              highlight: "Hardened Auth",
              btnText: "Security Config",
            },
            {
              img: IMG.about2,
              tag: "Input Sanitization",
              title: "Letters-Only Username Guard",
              desc: "Registration portal strictly blocks numbers, spaces, and special symbols in usernames via real-time keystroke & paste filters.",
              meta: [
                ["Regex Pattern", "^[A-Za-z]+$"],
                ["Paste Sanitizer", "Active"],
              ],
              highlight: "Zero Injection",
              btnText: "View Validation",
            },
            {
              img: IMG.chef,
              tag: "Role Routing",
              title: "Dynamic Role-Based Sidebar Engine",
              desc: "Automatically renders tailored KPIs, sidebars, and operational tables matched to the exact role selected on sign-in.",
              meta: [
                ["Configured Roles", "5 Distinct Portals"],
                ["Session Sync", "Instant"],
              ],
              highlight: "100% Synced",
              btnText: "Role Matrix",
            },
          ],
        },
        {
          id: "adm-finance",
          navTitle: "Financials & Tax Ledger",
          icon: "bi-bank2",
          badge: "Audited",
          eyebrow: "Treasury & UK VAT",
          heading: "Daily Card Settlements, Payroll & HMRC VAT Ledger",
          description:
            "Reconcile Stripe & Dojo card terminals, supplier BACS runs, staff Tronc payroll, and quarterly UK VAT filings.",
          primaryBtn: "Export Xero Ledger",
          kpis: [
            {
              value: "£58,410.00",
              label: "Weekly Card Terminal Settlement",
              sub: "Dojo Floor Terminals + Stripe Web",
              trend: "100% Reconciled",
              trendType: "up",
              icon: "bi-credit-card-fill",
              color: "basil",
            },
            {
              value: "£11,682.00",
              label: "Accrued UK VAT (20% Standard)",
              sub: "Ring-fenced in HMRC Reserve Vault",
              trend: "MTD Compliant",
              trendType: "gold",
              icon: "bi-shield-check",
              color: "mustard",
            },
            {
              value: "£142,900",
              label: "Operating Cash Reserve",
              sub: "Barclays Commercial Treasury Account",
              trend: "+£18.4k Net Inflow",
              trendType: "up",
              icon: "bi-safe2-fill",
              color: "chili",
            },
          ],
          tableTitle: "General Ledger & Treasury Settlement Feed",
          tableSub:
            "Verified credits and debits across Stackly Hospitality Ltd accounts.",
          tableHeaders: [
            "Ledger Ref",
            "Date",
            "Counterparty & Description",
            "Ledger Category",
            "Net Amount",
            "UK VAT (20%)",
            "Gross Total",
            "Status",
            "Voucher",
          ],
          tableRows: [
            [
              "GL-9041",
              "22 Oct 2026",
              "Dojo Merchant Services · Floor Batch #295",
              "Dine-In Card Sales",
              "+£7,017.08",
              "+£1,403.42",
              "+£8,420.50",
              { text: "Settled", type: "basil" },
              "Receipt",
            ],
            [
              "GL-9040",
              "22 Oct 2026",
              "Stripe UK · Online Member Orders",
              "Delivery & Pre-Auth",
              "+£3,850.00",
              "+£770.00",
              "+£4,620.00",
              { text: "Settled", type: "basil" },
              "Receipt",
            ],
            [
              "GL-9038",
              "21 Oct 2026",
              "HG Walter & Natoora Weekly Purveyor Run",
              "COGS Food Imports",
              "-£6,420.00",
              "£0.00 (Zero-Rated)",
              "-£6,420.00",
              { text: "Paid BACS", type: "ink" },
              "Invoice",
            ],
            [
              "GL-9035",
              "20 Oct 2026",
              "Covent Garden Estate Commercial Quarter",
              "Premises & Piazza License",
              "-£9,500.00",
              "-£1,900.00",
              "-£11,400.00",
              { text: "Paid Direct", type: "mustard" },
              "Invoice",
            ],
          ],
          cardsTitle: "Financial Controls & Audit Readiness",
          cardsEyebrow: "HMRC & Statutory Compliance",
          cards: [
            {
              img: IMG.cat1,
              tag: "0.00% Variance",
              title: "Automated POS-to-Bank Reconciliation",
              desc: "Every table check and online delivery order automatically matches against Dojo and Stripe daily bank payouts.",
              meta: [
                ["Unmatched Items", "0 Transactions"],
                ["Audit Status", "Clean"],
              ],
              highlight: "100% Matched",
              btnText: "Reconcile Report",
            },
            {
              img: IMG.cat2,
              tag: "Making Tax Digital",
              title: "HMRC Quarterly VAT Vault",
              desc: "20% output VAT from all hot food and beverage sales is automatically swept daily into our ring-fenced tax account.",
              meta: [
                ["Next Filing", "07 Nov 2026"],
                ["Vault Balance", "£34,890.00"],
              ],
              highlight: "Fully Funded",
              btnText: "Preview VAT Return",
            },
            {
              img: IMG.cat5,
              tag: "BACS Payroll",
              title: "Brigade, FOH & Fleet Payroll Run",
              desc: "Weekly fleet rider settlements and monthly salaried staff payroll with 100% transparent Tronc tip allocation.",
              meta: [
                ["Next Pay Run", "28 Oct 2026"],
                ["PAYE/NI Status", "Current"],
              ],
              highlight: "48 Employees",
              btnText: "Approve Payroll",
            },
          ],
        },
        {
          id: "adm-settings",
          navTitle: "Brand & Site Settings",
          icon: "bi-sliders2",
          badge: "99.98% Up",
          eyebrow: "System Infrastructure",
          heading: "Flagship Restaurant Profile, POS Sync & Portal Config",
          description:
            "Configure Covent Garden opening hours, kitchen pass printers, table reservation buffers, and website theme settings.",
          primaryBtn: "Save Global Config",
          kpis: [
            {
              value: "99.98%",
              label: "Member Portal & POS Uptime",
              sub: "Zero downtime across 365 days",
              trend: "Cloud Redundant",
              trendType: "up",
              icon: "bi-cloud-check-fill",
              color: "basil",
            },
            {
              value: "10:00–23:30",
              label: "Active Trading Hours (Mon–Sun)",
              sub: "24 Covent Garden Piazza, London WC2E 8RF",
              trend: "Kitchen Open Live",
              trendType: "up",
              icon: "bi-clock-fill",
              color: "chili",
            },
            {
              value: "12 Connected",
              label: "Hardware Terminals & KDS Screens",
              sub: "4 Kitchen KDS · 6 Dojo POS · 2 Host iPads",
              trend: "All Online (12ms)",
              trendType: "gold",
              icon: "bi-cpu-fill",
              color: "mustard",
            },
          ],
          tableTitle: "Connected Restaurant Hardware & API Integrations",
          tableSub:
            "Real-time health check of kitchen screens, thermal printers, and booking engines.",
          tableHeaders: [
            "Node ID",
            "System / Hardware Terminal",
            "Location Zone",
            "IP / Endpoint",
            "Latency",
            "Health Status",
            "Diagnostic",
          ],
          tableRows: [
            [
              "KDS-01",
              'Hot Pass Master Touch KDS (27")',
              "Main Kitchen Pass",
              "192.168.10.14",
              "8 ms",
              { text: "Online & Syncing", type: "basil" },
              "Ping Screen",
            ],
            [
              "KDS-02",
              "Neapolitan Wood-Oven KDS + Thermal KOT",
              "Pizza Station #1",
              "192.168.10.18",
              "9 ms",
              { text: "Online & Syncing", type: "basil" },
              "Test Print",
            ],
            [
              "POS-01",
              "Host Desk Reservation & Waitlist Terminal",
              "Piazza Entrance",
              "192.168.10.22",
              "11 ms",
              { text: "Online & Syncing", type: "basil" },
              "Sync Bookings",
            ],
            [
              "FLT-API",
              "Stackly Express Rider GPS Telemetry Bridge",
              "West End Cloud",
              "wss://fleet.stacklyfood",
              "14 ms",
              { text: "11 Bikes Connected", type: "mustard" },
              "View Telemetry",
            ],
          ],
          cardsTitle: "Flagship Venue & Theme Configuration",
          cardsEyebrow: "24 Covent Garden Piazza",
          cards: [
            {
              img: IMG.about1,
              tag: "Venue Identity",
              title: "Covent Garden Flagship Profile",
              desc: "24 Covent Garden Piazza, London WC2E 8RF · Tel: +91 9876543210 · Email: hello@stacklyfood.co.uk.",
              meta: [
                ["Seating Capacity", "148 Indoor + 32 Terrace"],
                ["EHO Rating", "5-Star Hygiene"],
              ],
              highlight: "Verified Venue",
              btnText: "Edit Venue Info",
            },
            {
              img: IMG.heroBurger,
              tag: "Theme Palette",
              title: "Stackly Culinary Brand System",
              desc: "Signature Chili Red (#C81D25), Warm Mustard (#F2A93B), Basil Green (#1F4D36), and Cream Paper (#FFF9F1) typography.",
              meta: [
                ["Display Font", "Fraunces Serif"],
                ["Body Font", "Manrope Sans"],
              ],
              highlight: "Theme Active",
              btnText: "Brand Assets",
            },
            {
              img: IMG.about2,
              tag: "Holiday Schedule",
              title: "Festive & Christmas Booking Locks",
              desc: "Festive 6-course Wagyu & Black Truffle tasting menu bookings open for 1 Dec – 31 Dec 2026.",
              meta: [
                ["Pre-Bookings", "84 Tables Locked"],
                ["Deposit Rule", "£25/Head Active"],
              ],
              highlight: "Festive Live",
              btnText: "Manage Dates",
            },
          ],
        },
      ],
    },
  };

  // =========================================================================
  // READ ENTERED LOGIN FORM DATA FROM URL PARAMS / STORAGE
  // =========================================================================
  function getActiveSessionData() {
    const params = new URLSearchParams(window.location.search);
    let stored = null;

    try {
      stored =
        JSON.parse(
          sessionStorage.getItem("stackly_active_session") || "null",
        ) ||
        JSON.parse(localStorage.getItem("stackly_active_session") || "null");
    } catch (e) {
      stored = null;
    }

    let regUser = null;
    try {
      regUser = JSON.parse(
        localStorage.getItem("stackly_registered_user") || "null",
      );
    } catch (e) {
      regUser = null;
    }

    const rawRole = (
      params.get("role") ||
      (stored && stored.role) ||
      (regUser && regUser.role) ||
      "customer"
    ).toLowerCase();

    const validRole = ROLE_CONFIG[rawRole] ? rawRole : "customer";
    const roleCfg = ROLE_CONFIG[validRole];

    const email =
      params.get("email") ||
      (stored && stored.email) ||
      (regUser && regUser.email) ||
      `${validRole}@stacklyfood.co.uk`;

    const password = (stored && stored.password) || "Stackly@2026";

    const rememberParam = params.get("rememberMe");
    let rememberDisplay = "Yes — Device Remembered";
    if (rememberParam) {
      rememberDisplay = rememberParam;
    } else if (stored && typeof stored.rememberMe === "boolean") {
      rememberDisplay = stored.rememberMe
        ? "Yes — Device Remembered"
        : "No (Single Session)";
    }

    const loginTimeRaw =
      params.get("loginTime") ||
      (stored && stored.loginTime) ||
      new Date().toISOString();

    let formattedTime = "Just Now · Active Session";
    try {
      const dt = new Date(loginTimeRaw);
      if (!isNaN(dt.getTime())) {
        formattedTime = dt.toLocaleString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });
      }
    } catch (e) {}

    const username =
      (stored && stored.username) ||
      (regUser && regUser.username) ||
      email
        .split("@")[0]
        .replace(/[^a-zA-Z]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim() ||
      "Stackly Member";

    return {
      role: validRole,
      roleLabel: roleCfg.roleLabel,
      email,
      password,
      rememberDisplay,
      formattedTime,
      username,
    };
  }

  // =========================================================================
  // RENDER SIDEBAR & CONTENT FOR ACTIVE ROLE + SECTION
  // =========================================================================
  let currentSession = getActiveSessionData();
  let activeSectionId = ROLE_CONFIG[currentSession.role].sections[0].id;

  function renderSessionCredentialsBanner() {
    const roleCfg = ROLE_CONFIG[currentSession.role];
    const maskedPw =
      currentSession.password.length > 2
        ? currentSession.password.slice(0, 2) +
          "•".repeat(Math.max(6, currentSession.password.length - 2))
        : "••••••••";

    // Sidebar user card
    const avatarEl = document.getElementById("sidebarAvatar");
    const nameEl = document.getElementById("sidebarUserName");
    const emailEl = document.getElementById("sidebarUserEmail");
    const rolePillEl = document.getElementById("sidebarRolePill");
    const kitchenNoteEl = document.getElementById("sidebarKitchenNote");

    if (avatarEl) {
      avatarEl.textContent = (currentSession.username || "S")
        .charAt(0)
        .toUpperCase();
    }
    if (nameEl) nameEl.textContent = currentSession.username;
    if (emailEl) emailEl.textContent = currentSession.email;
    if (rolePillEl) {
      rolePillEl.innerHTML = `<i class="bi ${roleCfg.badgeIcon}"></i> <span>${roleCfg.roleLabel}</span>`;
    }
    if (kitchenNoteEl) {
      kitchenNoteEl.textContent = roleCfg.kitchenNote;
    }

    // Topbar headings
    const topTitleEl = document.getElementById("dashTopTitle");
    const topSubEl = document.getElementById("dashTopSubtitle");
    if (topTitleEl) {
      topTitleEl.innerHTML = `${roleCfg.portalTitle}`;
    }
    if (topSubEl) {
      topSubEl.textContent = roleCfg.portalSubtitle;
    }

    // Submitted Login Form Data Banner
    const bannerContainer = document.getElementById("loginDataBanner");
    if (bannerContainer) {
      bannerContainer.innerHTML = `
        <div class="session-banner-header">
          <div>
            <div class="session-eyebrow">
              <i class="bi bi-shield-check"></i> Submitted Login Form Data &amp; Active Role Session
            </div>
            <h2 class="session-banner-title">
              Signed In As <em>${roleCfg.roleLabel}</em>
            </h2>
            <p class="session-banner-desc">
              Showing your live Covent Garden dashboard and sidebar tailored to the exact credentials submitted on the Sign In page.
            </p>
          </div>
          <div class="session-verified-pill">
            <i class="bi bi-check-circle-fill"></i> Authenticated Session · 24 Covent Garden Piazza
          </div>
        </div>

        <div class="row g-3 align-items-stretch session-data-grid">
          <div class="col-12 col-sm-6 col-xl-3 d-flex">
            <div class="session-data-item w-100">
              <div class="session-data-label">
                <i class="bi bi-person-badge-fill"></i> Selected Role (Login Form)
              </div>
              <p class="session-data-value">${roleCfg.roleLabel}</p>
              <div class="session-data-sub">Role Key: <code>${currentSession.role}</code> · Dedicated Sidebar Active</div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-xl-3 d-flex">
            <div class="session-data-item w-100">
              <div class="session-data-label">
                <i class="bi bi-envelope-check-fill"></i> Entered Email Address
              </div>
              <p class="session-data-value">${currentSession.email}</p>
              <div class="session-data-sub">Member / Staff ID: <strong>${currentSession.username}</strong></div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-xl-3 d-flex">
            <div class="session-data-item w-100">
              <div class="session-data-label">
                <i class="bi bi-key-fill"></i> Entered Password &amp; Strength
              </div>
              <p class="session-data-value">${maskedPw} <span class="badge rounded-pill ms-1" style="background:var(--basil);font-size:0.68rem;">Strong 5/5</span></p>
              <div class="session-data-sub">Submitted Length: ${currentSession.password.length} Characters Verified</div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-xl-3 d-flex">
            <div class="session-data-item w-100">
              <div class="session-data-label">
                <i class="bi bi-clock-history"></i> Remember Me &amp; Sign-In Time
              </div>
              <p class="session-data-value">${currentSession.rememberDisplay}</p>
              <div class="session-data-sub">Logged In: ${currentSession.formattedTime}</div>
            </div>
          </div>
        </div>
      `;
    }
  }

  function renderSidebarMenu() {
    const roleCfg = ROLE_CONFIG[currentSession.role];
    const menuLabelEl = document.getElementById("sidebarMenuRoleHeading");
    const navListEl = document.getElementById("sidebarNavList");

    if (menuLabelEl) {
      menuLabelEl.textContent = `${roleCfg.roleLabel} Menu`;
    }

    if (!navListEl) return;

    navListEl.innerHTML = roleCfg.sections
      .map((sec) => {
        const isActive = sec.id === activeSectionId;
        return `
          <li>
            <button
              type="button"
              class="dash-nav-btn ${isActive ? "active" : ""}"
              data-section-id="${sec.id}"
              aria-current="${isActive ? "page" : "false"}"
            >
              <span class="dash-nav-btn-left">
                <i class="bi ${sec.icon}"></i>
                <span class="text-truncate">${sec.navTitle}</span>
              </span>
              <span class="dash-nav-badge">${sec.badge}</span>
            </button>
          </li>
        `;
      })
      .join("");

    navListEl.querySelectorAll(".dash-nav-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const targetId = btn.getAttribute("data-section-id");
        if (targetId) {
          activeSectionId = targetId;
          renderSidebarMenu();
          renderActiveSectionContent();
          closeMobileSidebar();
        }
      });
    });
  }

  function renderActiveSectionContent() {
    const roleCfg = ROLE_CONFIG[currentSession.role];
    const section =
      roleCfg.sections.find((s) => s.id === activeSectionId) ||
      roleCfg.sections[0];

    const viewContainer = document.getElementById("dashDynamicView");
    if (!viewContainer || !section) return;

    // 1. KPI Cards Grid (Equal-height Bootstrap columns)
    const kpiColClass =
      section.kpis.length === 4
        ? "col-12 col-sm-6 col-xl-3 d-flex"
        : "col-12 col-md-4 d-flex";

    const kpisHtml = section.kpis
      .map(
        (kpi) => `
        <div class="${kpiColClass}">
          <div class="dash-card w-100">
            <div>
              <div class="kpi-card-top">
                <span class="kpi-icon-box ${kpi.color}">
                  <i class="bi ${kpi.icon}"></i>
                </span>
                <span class="kpi-trend-pill ${kpi.trendType}">
                  <i class="bi bi-lightning-charge-fill"></i> ${kpi.trend}
                </span>
              </div>
              <div class="kpi-value">${kpi.value}</div>
              <div class="kpi-label">${kpi.label}</div>
            </div>
            <p class="kpi-subtext mt-2 pt-2 border-top" style="border-color:var(--border-soft) !important;">
              ${kpi.sub}
            </p>
          </div>
        </div>
      `,
      )
      .join("");

    // 2. Responsive Bootstrap Table
    const headersHtml = section.tableHeaders
      .map((th) => `<th scope="col">${th}</th>`)
      .join("");

    const rowsHtml = section.tableRows
      .map((row) => {
        const cells = row
          .map((cell, idx) => {
            if (idx === 0) {
              return `<td class="td-code">${cell}</td>`;
            }
            if (idx === 1) {
              return `<td class="td-primary">${cell}</td>`;
            }
            if (typeof cell === "object" && cell !== null && cell.text) {
              return `<td><span class="status-badge ${cell.type}"><i class="bi bi-circle-fill" style="font-size:0.45rem;"></i> ${cell.text}</span></td>`;
            }
            if (idx === row.length - 1) {
              return `<td><button type="button" class="btn-dash-outline">${cell} <i class="bi bi-arrow-up-right"></i></button></td>`;
            }
            if (typeof cell === "string" && cell.startsWith("£")) {
              return `<td class="td-price">${cell}</td>`;
            }
            return `<td>${cell}</td>`;
          })
          .join("");
        return `<tr>${cells}</tr>`;
      })
      .join("");

    // 3. Equal-Height 3-Card Feature Grid
    const cardsHtml = section.cards
      .map(
        (c) => `
        <div class="col-12 col-lg-4 d-flex">
          <div class="dash-card w-100">
            <div>
              <div class="feature-card-head">
                <img src="${c.img}" alt="${c.title}" class="feature-card-thumb" />
                <div>
                  <span class="feature-card-tag">${c.tag}</span>
                  <h4 class="feature-card-title">${c.title}</h4>
                </div>
              </div>
              <div class="feature-card-body">
                <p class="feature-card-desc">${c.desc}</p>
                <ul class="feature-meta-list">
                  ${c.meta
                    .map(
                      (m) =>
                        `<li><span>${m[0]}</span><strong>${m[1]}</strong></li>`,
                    )
                    .join("")}
                </ul>
              </div>
            </div>
            <div class="feature-card-footer">
              <span class="feature-highlight-val">${c.highlight}</span>
              <button type="button" class="btn-dash-chili">
                <span>${c.btnText}</span>
                <i class="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </div>
      `,
      )
      .join("");

    viewContainer.innerHTML = `
      <div class="dash-tab-pane">
        <!-- Section Header -->
        <div class="dash-section-header">
          <div>
            <div class="dash-section-eyebrow">${section.eyebrow}</div>
            <h2 class="dash-section-title">${section.heading}</h2>
            <p class="mb-0 mt-1" style="font-size:0.88rem;color:var(--ink-soft);">
              ${section.description}
            </p>
          </div>
          <div class="d-flex align-items-center gap-2 flex-wrap">
            <a href="#" class="btn-dash-mustard">
              <i class="bi bi-filetype-csv"></i> Export Report
            </a>
            <button type="button" class="btn-dash-chili">
              <i class="bi bi-plus-circle-fill"></i> ${section.primaryBtn}
            </button>
          </div>
        </div>

        <!-- KPI Row (Equal Aligned Cards) -->
        <div class="row g-4 align-items-stretch mb-4">
          ${kpisHtml}
        </div>

        <!-- Responsive Bootstrap Data Table -->
        <div class="dash-table-card">
          <div class="dash-table-card-header">
            <div>
              <h3><i class="bi ${section.icon}"></i> ${section.tableTitle}</h3>
              <p>${section.tableSub}</p>
            </div>
            <div class="d-flex align-items-center gap-2 flex-wrap">
              <a href="#" class="btn-dash-outline">
                <i class="bi bi-funnel-fill"></i> Filter Pass
              </a>
              <button type="button" class="btn-dash-outline">
                <i class="bi bi-printer-fill"></i> Print Kitchen Copy
              </button>
            </div>
          </div>
          <div class="table-responsive dash-table-wrap">
            <table class="table table-stackly align-middle">
              <thead>
                <tr>${headersHtml}</tr>
              </thead>
              <tbody>
                ${rowsHtml}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Equal-Height 3-Column Culinary Cards -->
        <div class="dash-section-header mt-2">
          <div>
            <div class="dash-section-eyebrow">${section.cardsEyebrow}</div>
            <h3 class="dash-section-title">${section.cardsTitle}</h3>
          </div>
          <a href="#" class="btn-dash-outline">
            View All Kitchen Records <i class="bi bi-arrow-right"></i>
          </a>
        </div>

        <div class="row g-4 align-items-stretch">
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // MOBILE SIDEBAR DRAWER CONTROLS
  // =========================================================================
  const sidebarEl = document.getElementById("dashSidebar");
  const backdropEl = document.getElementById("dashSidebarBackdrop");
  const openSidebarBtn = document.getElementById("mobileSidebarToggle");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");

  function openMobileSidebar() {
    if (sidebarEl) sidebarEl.classList.add("open");
    if (backdropEl) backdropEl.classList.add("show");
  }

  function closeMobileSidebar() {
    if (sidebarEl) sidebarEl.classList.remove("open");
    if (backdropEl) backdropEl.classList.remove("show");
  }

  if (openSidebarBtn) {
    openSidebarBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openMobileSidebar();
    });
  }
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMobileSidebar();
    });
  }
  if (backdropEl) {
    backdropEl.addEventListener("click", closeMobileSidebar);
  }

  // =========================================================================
  // LOGOUT HANDLER (DOES NOT REDIRECT TO 404 — REDIRECTS TO LOGIN PAGE)
  // =========================================================================
  function handleLogout(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    try {
      sessionStorage.removeItem("stackly_active_session");
    } catch (err) {}
    window.location.href = "login.html";
  }

  const sidebarLogoutBtn = document.getElementById("sidebarLogoutBtn");
  const topbarLogoutBtn = document.getElementById("topbarLogoutBtn");
  if (sidebarLogoutBtn) {
    sidebarLogoutBtn.addEventListener("click", handleLogout);
  }
  if (topbarLogoutBtn) {
    topbarLogoutBtn.addEventListener("click", handleLogout);
  }

  // =========================================================================
  // REQUIREMENT 7: REDIRECT ALL EMPTY LINKS, "#" AND BUTTONS TO 404 PAGE
  // (EXCLUDING SIDEBAR MENU, MOBILE SIDEBAR TOGGLE, AND LOGOUT BUTTONS)
  // =========================================================================
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== "function") return;

      // 1. Never redirect sidebar menu items, mobile sidebar open/close buttons, or logout buttons to 404
      if (
        target.closest("#dashSidebar") ||
        target.closest(".dash-nav-btn") ||
        target.closest("#mobileSidebarToggle") ||
        target.closest("#closeSidebarBtn") ||
        target.closest("#sidebarLogoutBtn") ||
        target.closest("#topbarLogoutBtn") ||
        target.closest("[data-no-404]")
      ) {
        return;
      }

      // 2. Check if clicked element is an anchor tag with empty or "#" href
      const anchor = target.closest("a");
      if (anchor) {
        const rawHref = anchor.getAttribute("href");
        const trimmedHref = rawHref ? rawHref.trim() : "";
        if (
          trimmedHref === "" ||
          trimmedHref === "#" ||
          trimmedHref.toLowerCase() === "javascript:void(0)"
        ) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = "404.html";
          return;
        }
      }

      // 3. Check if clicked element is a button inside the dashboard (excluding sidebar & logout)
      const btn = target.closest("button");
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = "404.html";
      }
    },
    true,
  );

  // =========================================================================
  // INITIALIZE DASHBOARD ON LOAD
  // =========================================================================
  renderSessionCredentialsBanner();
  renderSidebarMenu();
  renderActiveSectionContent();
})();
