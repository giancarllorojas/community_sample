<template>
  <div class="container p-6 md:p-0">
    <div class="md:flex">
      <Card class="md:w-2/3">
        <Responsive-Image :height="250" src="/images/test.png"/>
        <div class="p-3 md:p-6l">
          
        </div>
      </Card>
      <Card class="self-start mt-4 md:mt-0 md:ml-6 p-3 md:p-6 md:w-1/3">
        
        <Modal noMobileMargins v-model="checkoutModal" :maxWidth="500" title="Faça parte do Aduo">
            <Btn class="w-full" height="38" color="#00E2A6">
              Quero fazer parte
            </Btn>
            <template #content>
              <div class="signup">
                <div class="signup-plans mb-4 select-none">
                  <div 
                    @click="activePlan = i" 
                    :class="{'bg-white shadow-md opacity-100': activePlan === i, 'opacity-50 hover:opacity-100': activePlan !== i}" 
                    class="cursor-pointer w-full rounded text-center py-4 transition-all" 
                    v-for="(plan, i) in plans" 
                    :key="i"
                  >
                    <div class="font-bold text-lg">
                      R${{parseMoney(plan.value)}}
                    </div>
                    <div class="text-xs">
                      <span v-if="plan.type === 'month'">por mês</span>
                      <span v-if="plan.type === 'trimester'">por trimestre</span>
                      <span v-if="plan.type === 'semester'">por semestre</span>
                      <span v-if="plan.type === 'year'">por ano</span>
                    </div>
                  </div>
                </div>
                <TextInput placeholder="Seu Nome" label="Nome"/>
                <TextInput placeholder="seuemail@email.com" label="E-mail"/>
                <TextInput placeholder="*******" label="Senha" type="password"/>
                <div class="w-2/3 mx-auto border-b border-primary opacity-20 mb-4"></div>
                <span class="text-xs font-bold">Forma de pagamento</span>
                <div class="flex bg-gray-100 mb-4 p-1 select-none">
                  <div 
                    @click="activeType = i" 
                    :class="{'bg-white shadow-md opacity-100': activeType === i, 'opacity-50 hover:opacity-100': activeType !== i}" 
                    class="cursor-pointer w-full rounded text-center py-2 transition-all p-2" 
                    v-for="(type, i) in types" 
                    :key="i"
                  >
                    <img class="mx-auto h-5 mb-1" :src="type.img"/>
                    <div class="font-bold text-sm">
                      {{type.name}}
                    </div>
                  </div>
                </div>
                <div v-if="types[activeType].value === 'credit_card'">
                  <TextInput placeholder="1111-1111-1111-1111" label="Número do Cartão"/>
                  <div class="flex">
                    <TextInput placeholder="MM/AA" class="w-2/4 mr-2" hideMessages label="Validade"/>
                    <TextInput placeholder="123" class="w-2/4 ml-2" hideMessages label="CVC"/>
                  </div>
                </div>
                <div class="text-xs w-full text-center mt-4">
                  🔒 Ambiente seguro e pagamento processado por <a class="text-secondary" href="https://aduo.app" target="_blank">Aduo</a>
                </div>
              </div>
              
            </template>
            <template #actions>
              <div class="flex justify-end">
                <Btn class="w-full" color="#00E2A6">Fazer parte - R$ {{currentPlan.value}}/
                  <span v-if="currentPlan.type === 'month'">mês</span>
                  <span v-if="currentPlan.type === 'trimester'">trimestre</span>
                  <span v-if="currentPlan.type === 'semester'">semestre</span>
                  <span v-if="currentPlan.type === 'year'">ano</span>
                </Btn>
              </div>
            </template>
          </Modal>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      checkoutModal: false,
      activePlan: 3,
      activeType: 0,
      plans: [
        {
          value: 45,
          type: 'month'
        },
        {
          value: 100,
          type: 'trimester'
        },
        {
          value: 180,
          type: 'semester'
        },
        {
          value: 280,
          type: 'year'
        },
      ],
      types: [
        {
          name: 'Cartão de crédito',
          value: 'credit_card',
          img: '/images/icons/creditcard.svg'
        },
        {
          name: 'PIX',
          value: 'pix',
          img: '/images/icons/pix.svg'
        },
        {
          name: 'Boleto bancário',
          value: 'boleto',
          img: '/images/icons/barcode.svg'
        },
        
      ]
    }
  },
  
  methods: {
    parseMoney(v){
      return parseFloat(v).toLocaleString({
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }
  },

  computed: {
    currentPlan(){
      return this.plans[this.activePlan]
    }
  }
}
</script>

<style lang="sass" scoped>
.signup
  .signup-plans
    @apply bg-gray-100 w-full flex p-1 rounded
</style>