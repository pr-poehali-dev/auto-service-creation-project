import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://cdn.poehali.dev/files/f786340c-3c12-49d2-9f84-03b11a4c4667.png" 
              alt="ЭГА Сервис" 
              className="h-12 md:h-14"
            />
            <nav className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('contacts')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
            </nav>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-primary hover:bg-primary/90"
            >
              Записаться
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
              Профессиональный ремонт<br />автомобильных узлов
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Специализируемся на восстановлении рулевых реек, стартеров, генераторов и высоковольтных батарей легковых автомобилей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-primary/90 text-lg px-8"
              >
                Наши услуги
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contacts')}
                className="text-lg px-8 border-primary text-primary hover:bg-primary/10"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Качественный ремонт с гарантией
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Gauge',
                title: 'Рулевые рейки',
                description: 'Диагностика, ремонт и восстановление рулевых реек всех типов',
              },
              {
                icon: 'Zap',
                title: 'Стартеры',
                description: 'Профессиональный ремонт и замена комплектующих стартеров',
              },
              {
                icon: 'Battery',
                title: 'Генераторы',
                description: 'Восстановление и ремонт генераторов любой сложности',
              },
              {
                icon: 'BatteryCharging',
                title: 'Высоковольтные батареи',
                description: 'Диагностика и ремонт батарей гибридных и электромобилей',
              },
            ].map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-muted-foreground">Предоставляем гарантию на все виды работ</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Быстро</h3>
              <p className="text-muted-foreground">Оперативное выполнение работ без потери качества</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-secondary" size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Опытные мастера</h3>
              <p className="text-muted-foreground">Квалифицированные специалисты с большим опытом</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
            Наши работы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры выполненных ремонтов
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Восстановление рулевой рейки', alt: 'Ремонт рулевой рейки' },
              { title: 'Ремонт стартера', alt: 'Восстановленный стартер' },
              { title: 'Диагностика генератора', alt: 'Проверка генератора' },
            ].map((work, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Wrench" size={64} className="text-primary/40" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-medium">{work.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Оставить заявку</CardTitle>
                <CardDescription>Заполните форму для записи на ремонт</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Опишите проблему или вопрос"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@ega-service.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                      <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 ЭГА Сервис. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;