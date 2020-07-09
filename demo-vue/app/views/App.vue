<template>
    <Page>
        <StackLayout>
            <CollectionView width="100%" height="100%" colWidth="50%" ref="listView" :items="itemList" @itemTap="onItemTap" itemIdGenerator="index" layoutStyle="waterfall">
                <v-template>
                    <GridLayout columns="*" rows="*" rippleColor="red" backgroundColor="white" :height="item.height" padding="10">
                        <GridLayout columns="*" rows="*" backgroundColor="red"/>

                        <!-- <AbsoluteLayout row="3" colSpan="5" marginTop="12" marginLeft="20" backgroundColor="gray" height="1" verticalAlignment="bottom" /> -->
                    </GridLayout>
                </v-template>
            </CollectionView>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
const DetailsPage = {
    template: `
  <Page>
    <ActionBar class="action-bar" title="Details Page">
      <ActionItem text="Action"></ActionItem>
    </ActionBar>
    <StackLayout>
      <Label :text="'Details ' + Math.random()" />
      <Button text="another" @tap="openDetails" />
      <Button text="back" @tap="goBack" />
    </StackLayout>
  </Page>
  `,

    methods: {
        openDetails() {
            this.$navigateTo(DetailsPage);
        },
        goBack() {
            this.$navigateBack();
        }
    }
};

export default {
    data() {
        const items = [];
        for (let loop = 0; loop < 1000; loop++) {
            items.push({ index: loop, leftIcon: 'mdi-magnify', title: 'title ' + loop.toString(), subtitle: 'subtitle ' + loop.toString(), height: Math.max(30, Math.floor(Math.random() * 100)) });
        }
        return {
            itemList: items
        };
    },
    methods: {
        onItemTap({ index, item }) {
            console.log(`Tapped on ${index} ${item.title}`);
            this.$navigateTo(DetailsPage);
        },
        logEvent(e) {
            console.log('logEvent', e.eventName, e.extraData);
        }
        // itemIdGenerator(item, i) {
        //   return item.index;
        // }
    }
};
</script>

<style scoped>
ActionBar {
    background-color: #53ba82;
    color: #ffffff;
}

.message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
}
</style>
