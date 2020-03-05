import { ReactNode } from 'react';
import { FlagButtonProps } from './FlagButton';
import { TranslationLanguageCode, CountryCode, Country, Region, Subregion } from './types';
import { Theme } from './CountryTheme';
import { CountryFilterProps } from './CountryFilter';
import { StyleProp, ViewStyle, ModalProps, FlatListProps } from 'react-native';
interface Props {
    countryCode: CountryCode;
    region?: Region;
    subregion?: Subregion;
    countryCodes?: CountryCode[];
    excludeCountries?: CountryCode[];
    theme?: Theme;
    translation?: TranslationLanguageCode;
    modalProps?: ModalProps;
    filterProps?: CountryFilterProps;
    flatListProps?: FlatListProps<Country>;
    withAlphaFilter?: boolean;
    withCallingCode?: boolean;
    withCurrency?: boolean;
    withEmoji?: boolean;
    withCountryNameButton?: boolean;
    withCurrencyButton?: boolean;
    withCallingCodeButton?: boolean;
    withCloseButton?: boolean;
    withFilter?: boolean;
    withFlag?: boolean;
    withModal?: boolean;
    disableNativeModal?: boolean;
    visible?: boolean;
    containerButtonStyle?: StyleProp<ViewStyle>;
    pickerStyles?: StyleProp<{
        itemWrapper: ViewStyle;
        text: ViewStyle;
    }>;
    renderFlagButton?(props: FlagButtonProps): ReactNode;
    renderCountryFilter?(props: CountryFilterProps): ReactNode;
    onSelect(country: Country): void;
    onOpen?(): void;
    onClose?(): void;
}
declare const Main: {
    ({ theme, translation, ...props }: Props): JSX.Element;
    defaultProps: {
        onSelect: () => void;
        withEmoji: boolean;
    };
};
export default Main;
export { getCountriesAsync as getAllCountries, getCountryCallingCodeAsync as getCallingCode, } from './CountryService';
export { CountryModal } from './CountryModal';
export { DARK_THEME, DEFAULT_THEME } from './CountryTheme';
export { CountryFilter } from './CountryFilter';
export { CountryList } from './CountryList';
export { FlagButton } from './FlagButton';
export { Flag } from './Flag';
export { HeaderModal } from './HeaderModal';
export { CountryModalProvider } from './CountryModalProvider';
export * from './types';
