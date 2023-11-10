import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SearchBar, Separator, Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useTheme } from '@shared/hooks'
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import { ServiceItem } from '@entities/service-item'
import { Service } from '@shared/api'

const Wrapper = styled.View`
  background: ${({ theme }) => theme.palette.background.primary};
  flex: 1;
`

const SearchBarWrapper = styled.View`
  background-color: ${({ theme }) => theme.palette.background.primary};
  margin: 16px;
  height: 36px;
`

type ServicesScreenProps = {
  filteredServices: Service[]
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  onServiceTapped: (service: Service) => void
}

export const ServicesScreen = ({
  filteredServices,
  searchText,
  setSearchText,
  onServiceTapped,
}: ServicesScreenProps) => {
  const theme = useTheme()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={{ flex: 1 }}
    >
      <Wrapper>
        <SearchBarWrapper>
          <SearchBar
            placeholder="Поиск"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor={theme.palette.text.tertiary}
          />
        </SearchBarWrapper>

        <FlatList
          data={filteredServices}
          keyboardShouldPersistTaps="always"
          keyExtractor={(type) => type.service_id}
          style={{ backgroundColor: theme.palette.background.secondary }}
          renderItem={({ item }) => (
            <ServiceItem service={item} onPress={() => onServiceTapped(item)} />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Wrapper>
    </KeyboardAvoidingView>
  )
}
