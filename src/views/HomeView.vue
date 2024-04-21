<template>
  <div class="home">
  <HeroSlider/>
  <SmallBanner/>
  <ProductArrea/>
  <MediumBanner/>
  <HotItem/>
  <OnSell/>
  <DellOfDay/>
  <NewsSubscribe/>
  </div>
</template>

<script>
  import HeroSlider from "@/components/home/HeroSlider";
  import SmallBanner from "@/components/home/SmallBanner";
  import ProductArrea from "@/components/home/ProductArrea";
  import MediumBanner from "@/components/home/MediumBanner";
  import HotItem from "@/components/home/HotItem";
  import OnSell from "@/components/home/OnSell";
  import DellOfDay from "@/components/home/DellOfDay";
  import NewsSubscribe from "@/components/home/NewsSubscribe";

  export default {
    name: 'HomeView',
    components: {HeroSlider, SmallBanner, ProductArrea, MediumBanner, HotItem, OnSell, DellOfDay, NewsSubscribe}
  }
</script>

<style>

</style>
