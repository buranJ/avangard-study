export interface ITender {
    id: string;
    title: string;
    mini_description: string;
    created_at: string;
    place: string;
  }
  
  export interface ITenderDetail extends ITender {
    id: string;
    more_info: [
      {
        id: string;
        name: string;
        quantity: number;
        tender: string;
      }
    ];
    contacts: [
      {
        id: string;
        title: string;
        link: string;
        tender: string;
      }
    ];
    title: string;
    mini_description: string;
    description: string;
    place: string;
    file: string;
    organization: string;
    responsible_person: string;
    subject: string;
    supplier_selection_method: string;
    purpose: string;
    created_at: string;
  }
    

  // export interface ITenderDetail extends ITender {
  //   organization: string;
  //   responsible: string;
  //   subject: string;
  //   method: string;
  //   purpose: string;
  //   requirements: {
  //     passenger: number;
  //     cargo: number;
  //   };
  //   contacts: {
  //     phones: string[];
  //     emails: string[];
  //     address: string;
  //   };
  // }
  
  // export interface ITender {
  //   id: string;
  //   title: string;
  //   location: string;
  //   mini_description: string;
  //   date: string;
  //   slug: string;
  //   image: string;
  // }
  
  // export interface ITenderDetail extends ITender {
  //   organization: string;
  //   responsible: string;
  //   subject: string;
  //   method: string;
  //   purpose: string;
  //   requirements: {
  //     passenger: number;
  //     cargo: number;
  //   };
  //   contacts: {
  //     phones: string[];
  //     emails: string[];
  //     address: string;
  //   };
  // }