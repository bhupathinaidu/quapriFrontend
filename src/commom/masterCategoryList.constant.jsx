import businessCard from "../assets/popularProducts/visitingCard.jpg";
import officeSupply from "../assets/popularProducts/officeSupply.jpg";
import noteBooks from "../assets/noteBooks.jpg";
import invitations from "../assets/photoProducts/invitationCard.jpg";
import customPen from "../assets/customPens.jpg";
import greetingCard from "../assets/photoProducts/greetingCard.jpg";

export const masterList = [
  {
    id: "businessCard",
    imgSrc: businessCard,
    label: "Business Card",
    src: "/business-cards",
  },
  {
    id: "officeSupplies",
    imgSrc: officeSupply,
    label: "Office Supplies",
    src: "/office-supplies",
  },
  {
    id: "noteBooks",
    imgSrc: noteBooks,
    label: "Notebooks",
    src: "/notebooks",
  },
  {
    id: "invitation",
    imgSrc: invitations,
    label: "Invitations",
    src: "/invitation-cards",
  },
  {
    id: "accessories",
    imgSrc: customPen,
    label: "Accessories & More",
    src: "/accessories-more",
  },
  {
    id: "cards",
    imgSrc: greetingCard,
    label: "Cards",
    src: "/greeting-cards",
  },
];
