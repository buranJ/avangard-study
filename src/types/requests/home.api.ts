export interface IGetHomeInfoResponse {
  banner: string;
  first_key: string;
  first_value: number;
  second_key: string;
  second_value: number;
  third_key: string;
  third_value: number;
  address: [
    {
      link: string;
      title: string;
    }
  ];
}
